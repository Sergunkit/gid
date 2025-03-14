import { Link, useLocation, useParams } from 'react-router';
import { Button } from '@mantine/core';
import { IconSitemap } from '@tabler/icons-react';

import type { StructureContent } from '@/api';
import { Card, Loader, Page, Person } from '@/ui';
import { declense, getFullName, getUniqueItemsById } from '@/utils';

import { getSubMembers } from './Structure.utils';

type StructureContentProps = {
  data?: StructureContent;
  isLoading: boolean;
};

/**
 * Компонент `StructureElement` отображает содержимое
 * структуры компании.
 */
export function StructureElement({ data, isLoading }: StructureContentProps) {
  const { pathname } = useLocation();
  const { id = '' } = useParams();
  const headName = getFullName(data?.head);
  const subTeams = data?.children?.flat() ?? [];
  const membersList = data?.members ?? [];
  const members = getUniqueItemsById(membersList);
  const subMembersList = getSubMembers(subTeams);
  const subMembers = getUniqueItemsById(subMembersList);
  const membersLength = data?.members?.length ?? 0;
  const totalLength = membersLength + Number(!!data?.head);
  const membersText = declense(['человек', 'человека', 'человек'], totalLength);
  const description = `${totalLength} ${membersText}`;

  if (id === '') {
    return (
      <Page.Empty
        icon={IconSitemap}
        text="Выберите раздел в структуре, чтобы увидеть подробную информацию"
      />
    );
  }

  if (isLoading) {
    return <Loader page />;
  }

  return (
    <>
      <Card>
        <div className="structure-header">
          <div className="structure-header-left">
            <div className="structure-name">{data?.name}</div>
            <div className="structure-description">{description}</div>
          </div>
          <div className="structure-header-right">
            <Button
              component={Link}
              to={`/teams/${data?.id}`}
              state={{
                prev: {
                  title: 'Назад к структуре',
                  href: pathname,
                },
              }}
            >
              Перейти
            </Button>
          </div>
        </div>
      </Card>
      {data?.head && (
        <div className="structure-content-list">
          <Link
            to={`/profile/${data?.head.id}`}
            state={{
              prev: {
                title: 'Назад к структуре',
                href: pathname,
              },
            }}
          >
            <Person
              avatar={data?.head.avatar ?? ''}
              name={headName}
              teams={[data?.head.position ?? '']}
              skills={data?.head.skills ?? []}
              timezone="Europe/Moscow"
              phone="+79123456789"
              email="iivanov@example.com"
              telegram="@iivanovtg"
            />
          </Link>
        </div>
      )}
      {!!members.length && (
        <>
          <div className="structure-content-header">Сотрудники команды</div>
          <div className="structure-content-list">
            {members.map(member => {
              const name = getFullName(member);

              return (
                <Link
                  to={`/profile/${member.id}`}
                  state={{
                    prev: {
                      title: 'Назад к структуре',
                      href: pathname,
                    },
                  }}
                >
                  <Person
                    key={member.id}
                    avatar={member.avatar ?? ''}
                    name={name}
                    teams={[member.position]}
                    skills={member.skills ?? []}
                    timezone="Europe/Moscow"
                    phone="+79123456789"
                    email="iivanov@example.com"
                    telegram="@iivanovtg"
                  />
                </Link>
              );
            })}
          </div>
        </>
      )}
      {!!subMembers.length && (
        <>
          <div className="structure-content-header">Сотрудники подкоманд</div>
          <div className="structure-content-list">
            {subMembers.map(member => {
              const name = getFullName(member);

              return (
                <Link
                  to={`/profile/${member.id}`}
                  state={{
                    prev: {
                      title: 'Назад к структуре',
                      href: pathname,
                    },
                  }}
                >
                  <Person
                    key={member.id}
                    avatar={member.avatar ?? ''}
                    name={name}
                    teams={[member.position]}
                    skills={member.skills ?? []}
                    timezone="Europe/Moscow"
                    phone="+79123456789"
                    email="iivanov@example.com"
                    telegram="@iivanovtg"
                  />
                </Link>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
