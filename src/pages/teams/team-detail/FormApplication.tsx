import * as React from 'react';

import dayjs from 'dayjs';
import { Button, MultiSelect, Select } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { useForm } from '@mantine/form';

import { useAddRequirement } from '@/api';
import { useEditRequirement } from '@/api';
import { useRoles } from '@/api';
import { useSkills } from '@/api';
import { useAuth } from '@/auth';
import { Modal } from '@/ui';

import type { Application } from './TeamDetail.types';

type FormApplicationProps = {
  id?: number;
  application?: Application;
  opened: boolean;
  onClose: () => void;
  onClosed: () => void;
};

/**
 * Компонент `FormApplication` отображает модальное окно
 * с формой добавления заявки в команду.
 */
export function FormApplication({
  id,
  application,
  opened,
  onClose,
  onClosed,
}: FormApplicationProps) {
  const { mutate: create, isPending: isPendingCreate } = useAddRequirement();
  const { mutate: edit, isPending: isPendingEdit } = useEditRequirement(
    application?.id,
  );
  const { user } = useAuth();
  const { data: roles } = useRoles();
  const { data: skills } = useSkills();
  const rolesData = roles?.data ?? [];
  const skillsData = skills?.data ?? [];
  const rolesOptions = rolesData.map(role => {
    return {
      value: role.id.toString(),
      label: role.name,
    };
  });
  const skillsOptions = skillsData.map(skill => {
    return {
      value: skill.id.toString(),
      label: skill.name,
    };
  });
  const title = `${application ? 'Редактирование' : 'Создание'} заявки`;
  const initialValues = {
    role: '',
    skills: [] as string[],
    time: new Date(),
  };
  const form = useForm({
    mode: 'uncontrolled',
    validateInputOnChange: true,
    initialValues,
    validate: {
      role: value => (!value ? 'Должность задана неверно' : null),
      time: value => (dayjs(value).isValid() ? null : 'Дата выхода не задана'),
    },
  });

  React.useEffect(() => {
    if (application) {
      const values = {
        role: application?.structureRole?.id.toString() ?? '',
        skills: application?.skills.map(item => `${item.id}`) ?? [],
        time: application?.deadline
          ? new Date(application?.deadline)
          : new Date(),
      };

      form.setValues(values);
      form.resetDirty(values);
    } else {
      form.setValues(initialValues);
      form.resetDirty(initialValues);
    }
  }, [application]);

  return (
    <Modal
      title={title}
      opened={opened}
      onClose={onClose}
      onClosed={onClosed}
    >
      <form
        onSubmit={form.onSubmit(values => {
          const onSettled = () => {
            form.reset();
            onClose();
          };

          if (application) {
            edit(
              {
                deadline: values.time.toISOString().split('T')[0],
                quantity: 1,
                skillIDs: values.skills.map(item => +item),
                structureRoleId: Number.parseInt(values.role, 10),
              },
              { onSettled },
            );
          } else {
            create(
              {
                creatorId: user?.id ?? 0,
                deadline: values.time.toISOString().split('T')[0],
                quantity: 1,
                skillIDs: values.skills.map(item => +item),
                structureId: id ?? 0,
                structureRoleId: Number.parseInt(values.role, 10),
              },
              { onSettled },
            );
          }
        })}
      >
        <Modal.Form>
          <Select
            key={form.key('role')}
            placeholder="Выберите должность"
            data={rolesOptions}
            {...form.getInputProps('role')}
          />

          <MultiSelect
            key={form.key('skills')}
            placeholder="Введите навык"
            data={skillsOptions}
            {...form.getInputProps('skills')}
          />

          <DatePickerInput
            key={form.key('time')}
            placeholder="Дата выхода сотрудника"
            valueFormat="DD.MM.YYYY"
            defaultValue={new Date()}
            clearable
            {...form.getInputProps('time')}
          />
        </Modal.Form>

        <Modal.Footer>
          <Button
            variant="default"
            onClick={onClose}
          >
            Отмена
          </Button>
          <Button
            type="submit"
            variant="filled"
            loading={isPendingCreate || isPendingEdit}
          >
            {application ? 'Сохранить' : 'Добавить'}
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
