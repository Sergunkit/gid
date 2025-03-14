import { useLocation } from 'react-router';
import { IconPlus, IconUsers } from '@tabler/icons-react';

import type { UserDetail, UserStructure } from '@/api';
import { useDisclosure } from '@/hooks';
import { Button, Card, Input, Modal, Page, Pills, User } from '@/ui';
import { getFullName } from '@/utils';

import './ProfileTeams.styles.css';

type ProfileTeamsProps = {
  data?: UserStructure[];
  info?: UserDetail;
  editable: boolean;
};

/**
 * Компонент `ProfileTeams` отображает информацию о командах пользователя.
 *
 * @param id - Идентификатор пользователя.
 * @param info - Данные о пользователе.
 * @param editable - Флаг доступности редактирования.
 */
export function ProfileTeams({ data, info, editable }: ProfileTeamsProps) {
  const { pathname } = useLocation();
  const [opened, { open, close }] = useDisclosure(false);
  const allowEdits = false;

  if (!data?.length) {
    return (
      <Page.Empty
        icon={IconUsers}
        text="У сотрудника пока нет ни одной команды"
      >
        {allowEdits && editable && (
          <Button
            leftSection={<IconPlus size={14} />}
            variant="outline"
            onClick={open}
          >
            Добавить команду
          </Button>
        )}
      </Page.Empty>
    );
  }

  return (
    <div className="profile-teams">
      {allowEdits && editable && (
        <Modal
          title="Добавление команды"
          opened={opened}
          onClose={close}
        >
          <Modal.Form>
            <Input
              name="new-team-name"
              placeholder="Команда"
            />
            <Input
              name="new-team-role"
              placeholder="Роль"
            />
          </Modal.Form>
          <Modal.Footer>
            <Button
              variant="default"
              onClick={close}
            >
              Отмена
            </Button>
            <Button
              variant="filled"
              onClick={close}
            >
              Добавить
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {allowEdits && editable && (
        <div className="profile-teams-header">
          <Button
            leftSection={<IconPlus size={14} />}
            variant="outline"
            onClick={open}
          >
            Добавить команду
          </Button>
        </div>
      )}
      {data?.map(team => {
        const name = getFullName(info);
        const structure = info?.structures.find(s => s.id === team.id);

        return (
          <div
            key={team.id}
            className="profile-team"
          >
            <Card>
              <Card.Header
                title={team.name}
                url={`/teams/${team.id}`}
                state={{
                  prev: {
                    title: 'Назад к профилю',
                    href: pathname,
                  },
                }}
              />
              <Card.Section>{team.description}</Card.Section>
              {!!team.tags?.length && (
                <Card.Section title="Тэги">
                  <Pills
                    value={team.tags}
                    maximum={6}
                  />
                </Card.Section>
              )}
              {structure?.role && (
                <Card.Section title="Роль в команде">
                  <User
                    avatar={info?.avatar ?? ''}
                    title={name}
                    description={structure.role}
                  />
                </Card.Section>
              )}
              {allowEdits && editable && (
                <div className="profile-team-footer">
                  <Button
                    variant="subtle"
                    color="red"
                    fullWidth
                  >
                    Завершить работу в команде
                  </Button>
                </div>
              )}
            </Card>
          </div>
        );
      })}
    </div>
  );
}
