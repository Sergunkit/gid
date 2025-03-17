import * as React from 'react';

// import { Link, useLocation, useParams } from 'react-router';
// import { Button } from '@mantine/core';

// import type { GenericError } from '@/api';
// import { useStructure } from '@/api';
// import { useAuth } from '@/auth';
// import { Card, Page, Pills, User } from '@/ui';
// import { getFullName, getUniqueItemsById } from '@/utils';

// import { DeleteApplication } from './DeleteApplication';
// import { FormApplication } from './FormApplication';
// import type { Application } from './TeamDetail.types';
// import { getSubMembers } from './TeamDetail.utils';
// import { ViewApplication } from './ViewApplication';

import './TeamDetail.styles.css';

/**
 * Компонент `TeamDetail` отображает страницу команды.
 */
export function TeamDetail() {
  const [view, setView] = React.useState<Application | undefined>(undefined);
  const [viewOpened, setViewOpened] = React.useState<boolean>(false);
  const [edit, setEdit] = React.useState<Application | undefined>(undefined);
  const [formOpened, setFormOpened] = React.useState<boolean>(false);
  const [remove, setRemove] = React.useState<number | undefined>(undefined);
  const { pathname, state } = useLocation();
  const { id = '' } = useParams();
  const { data, isLoading, error } = useStructure(id);
  const { user } = useAuth();
  const headName = getFullName(data?.data.head);
  const subMembersList = getSubMembers(data?.data.children ?? []);
  const subMembers = getUniqueItemsById(subMembersList);
  const editable = true;
  const teamName = data?.data.name ?? 'Команда';
  const prev = state?.prev;
  const back = prev ?? {
    title: 'Назад к списку команд',
    href: '/teams',
  };

  return (
    <Page
      title={teamName}
      seoTitle={`${teamName} :: Справочник команд`}
      back={back}
      isEmpty={!data?.data}
      isLoading={isLoading}
      error={error as GenericError}
    >
      <Card>
        <ViewApplication
          application={view}
          team={data?.data.name ?? 'Команда'}
          opened={viewOpened}
          onClose={() => setViewOpened(false)}
          onClosed={() => setView(undefined)}
        />
        <FormApplication
          id={data?.data.id}
          application={edit}
          opened={formOpened}
          onClose={() => setFormOpened(false)}
          onClosed={() => setEdit(undefined)}
        />
        <DeleteApplication
          id={remove}
          onClose={() => setRemove(undefined)}
        />
        <Card.Section>
          <div className="team-detail-header">
            <div className="team-header-description">
              {data?.data.description ?? 'Описание отсутствует'}
            </div>
            <div className="team-header-tags">
              <Pills
                value={data?.data.tags ?? []}
                editable={false}
              />
            </div>
          </div>
        </Card.Section>
        {!!data?.data.head?.lastName && (
          <Card.Section>
            <Card.Header
              title="Руководство"
              size="sm"
            />
            <Card.Content className="team-detail-members">
              <Link
                to={`/profile/${data?.data.head.id}`}
                state={{
                  prev: {
                    title: 'Назад к команде',
                    href: pathname,
                  },
                }}
              >
                <User
                  title={headName}
                  description={data?.data.head.position}
                  skills={data?.data.head.skills?.length ?? 0}
                />
              </Link>
            </Card.Content>
          </Card.Section>
        )}
        <Card.Section>
          <Card.Header
            title="Заявки на новых сотрудников"
            subtitle={`${data?.data.requirements?.length ?? 0}`}
            size="sm"
          />
          <Card.Content className="team-detail-members">
            {data?.data.requirements?.map(item => {
              const today = new Date();
              const date = item.deadline ? new Date(item.deadline) : today;
              const isToday = today.toDateString() === date.toDateString();
              const description = isToday
                ? 'нужен сейчас'
                : `нужен с ${item.deadline}`;

              return (
                <User
                  key={item.id}
                  type="application"
                  title={item.structureRole.name}
                  description={description}
                  skills={item.skills?.length ?? 0}
                  editable={editable}
                  onClick={() => {
                    setView(item);
                    setViewOpened(true);
                  }}
                  onEdit={() => {
                    setEdit(item);
                    setFormOpened(true);
                  }}
                  onDelete={() => setRemove(item.id)}
                />
              );
            })}
            {user?.role === 'head-team' && (
              <div className="team-detail-button">
                <Button
                  variant="light"
                  size="xs"
                  onClick={() => setFormOpened(true)}
                >
                  Добавить
                </Button>
              </div>
            )}
          </Card.Content>
        </Card.Section>
        {!!data?.data.members?.length && (
          <Card.Section>
            <Card.Header
              title="Сотрудники команды"
              subtitle={data?.data.members.length.toString()}
              size="sm"
            />
            <Card.Content className="team-detail-members">
              {data?.data.members.map(member => {
                const name = getFullName(member);

                return (
                  <Link
                    key={member.id}
                    to={`/profile/${member.id}`}
                    state={{
                      prev: {
                        title: 'Назад к команде',
                        href: pathname,
                      },
                    }}
                  >
                    <User
                      key={member.id}
                      title={name}
                      description={member.position}
                      skills={member.skills?.length ?? 0}
                    />
                  </Link>
                );
              })}
            </Card.Content>
          </Card.Section>
        )}
        {!!subMembers.length && (
          <Card.Section>
            <Card.Header
              title="Сотрудники подкоманд"
              subtitle={subMembers.length.toString()}
              size="sm"
            />
            <Card.Content className="team-detail-members">
              {subMembers.map(member => {
                const name = getFullName(member);

                return (
                  <Link
                    key={member.id}
                    to={`/profile/${member.id}`}
                    state={{
                      prev: {
                        title: 'Назад к команде',
                        href: pathname,
                      },
                    }}
                  >
                    <User
                      title={name}
                      description={member.position}
                      skills={member.skills?.length ?? 0}
                    />
                  </Link>
                );
              })}
            </Card.Content>
          </Card.Section>
        )}
      </Card>
    </Page>
  );
}
