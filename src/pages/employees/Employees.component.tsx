import * as React from 'react';

import { Link, useLocation } from 'react-router';

import type { UsersSearchData } from '@/api';
import { GenericError } from '@/api';
import { useUsersSearch } from '@/api';
import { useInViewport } from '@/hooks';
import { Loader, Page, Person } from '@/ui';
import { getFullName } from '@/utils';

import { EmployeesPanel } from './Employees.panel';

import './Employees.styles.css';

/**
 * Компонент `Employees` отображает справочник сотрудников.
 */
export function Employees() {
  const [query, setQuery] = React.useState<UsersSearchData | null>(null);
  const { pathname } = useLocation();
  const { ref, inViewport } = useInViewport();
  const result = useUsersSearch(query);
  const { data, error, fetchNextPage, hasNextPage, isFetching } = result;
  const isEmpty = !data?.pages?.some(
    page => page.responses[0].hits.hits.length > 0,
  );

  React.useEffect(() => {
    if (inViewport && hasNextPage) {
      fetchNextPage();
    }
  }, [inViewport]);

  return (
    <Page
      title="Справочник сотрудников"
      isEmpty={isEmpty && !isFetching}
      isLoading={isEmpty && isFetching}
      error={error as GenericError}
      panel={<EmployeesPanel onChange={setQuery} />}
    >
      <div
        role="list"
        className="employee-list"
      >
        {data?.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.responses[0].hits.hits.map(hit => {
              const item = hit._source;
              const name = getFullName(item);

              return (
                <Link
                  key={item.id}
                  role="listitem"
                  to={`/profile/${item.id}`}
                  state={{
                    prev: {
                      title: 'Назад к списку сотрудников',
                      href: pathname,
                    },
                  }}
                >
                  <Person
                    avatar={item.avatar ?? ''}
                    name={name}
                    teams={[item.workInfo.position]}
                    skills={item.skills}
                    timezone={item.timezone ?? ''}
                    phone={item.phone}
                    email={item.email}
                    telegram={item.telegram ?? ''}
                  />
                </Link>
              );
            })}
          </React.Fragment>
        ))}
        <div
          ref={ref}
          className="employee-loader"
          style={{ display: hasNextPage ? 'flex' : 'none' }}
        >
          <Loader />
        </div>
      </div>
    </Page>
  );
}
