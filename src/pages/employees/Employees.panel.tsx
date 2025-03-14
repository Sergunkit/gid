import * as React from 'react';

import { useForm } from '@mantine/form';
import { useDebouncedCallback } from '@mantine/hooks';

import type { UsersSearchData } from '@/api';
import { Page } from '@/ui';
import { isValidName } from '@/utils';

import { ClearableInput } from './Employees.input';

type EmployeePanelProps = { onChange?: (data: UsersSearchData) => void };

/**
 * Отображает панель поиска и фильтрации списка сотрудников.
 *
 * @param onChange - Обработчик события изменения данных.
 */
export function EmployeesPanel({ onChange }: EmployeePanelProps) {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      firstName: '',
      lastName: '',
      role: '',
    },
    onValuesChange: useDebouncedCallback(values => onChange?.(values), 500),
  });

  function allowNameCharsOnly(event: React.KeyboardEvent<HTMLInputElement>) {
    const valid = isValidName(event.key);

    if (!valid) {
      event.preventDefault();
    }
  }

  return (
    <form>
      <Page.Panel>
        <ClearableInput
          key={form.key('firstName')}
          placeholder="Имя сотрудника"
          onKeyDown={allowNameCharsOnly}
          {...form.getInputProps('firstName')}
        />
        <ClearableInput
          key={form.key('lastName')}
          placeholder="Фамилия сотрудника"
          onKeyDown={allowNameCharsOnly}
          {...form.getInputProps('lastName')}
        />
        <ClearableInput
          key={form.key('role')}
          placeholder="Должность сотрудника"
          onKeyDown={allowNameCharsOnly}
          {...form.getInputProps('role')}
        />
      </Page.Panel>
    </form>
  );
}
