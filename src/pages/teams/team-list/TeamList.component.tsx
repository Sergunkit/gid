import { Link, useLocation } from 'react-router';

// import type { GenericError } from '@/api';
// import { useStructures } from '@/api';
// import { Card, Input, Page, Pills, User } from '@/ui';
// import { declense, getFullName } from '@/utils';

import './TeamList.style.css';

/**
 * Компонент `TeamList` отображает список команд.
 */
export function TeamList() {
  const { pathname } = useLocation();
  const { data, isLoading, error } = useStructures();
  const hasPanel = false;

  return (
    <Page
      title="Справочник команд"
      isEmpty={!data?.data.length}
      isLoading={isLoading}
      error={error as GenericError}
    >
      {hasPanel && (
        <Page.Panel>
          <Input
            width={240}
            name="search"
            placeholder="Поиск по командам"
          />
        </Page.Panel>
      )}
      <div className="team-list">
        {data?.data.map(team => {
          const size = team.membersCount;
          const declension = declense(['человек', 'человека', 'человек'], size);
          const subtitle = `${size} ${declension}`;
          const ownerName = getFullName(team.head);

          return (
            <Card>
              <Card.Header
                title={team.name}
                subtitle={subtitle}
                url={`/teams/${team.id}`}
              />
              {team.description && (
                <Card.Section>
                  <div className="team-description">{team.description}</div>
                </Card.Section>
              )}
              {!!team.tags?.length && (
                <Card.Section title="Теги">
                  <Pills
                    value={team.tags}
                    maximum={5}
                  />
                </Card.Section>
              )}
              {team.head && (
                <Card.Section title="Руководитель проекта">
                  <Link
                    to={`/profile/${team.head.id}`}
                    state={{
                      prev: {
                        title: 'Назад к списку команд',
                        href: pathname,
                      },
                    }}
                  >
                    <User
                      avatar={team.head.avatar}
                      title={ownerName}
                      description={team.head.position}
                    />
                  </Link>
                </Card.Section>
              )}
            </Card>
          );
        })}
      </div>
    </Page>
  );
}
