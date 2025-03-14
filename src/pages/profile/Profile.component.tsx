import { useLocation, useParams } from 'react-router';

import type { GenericError } from '@/api';
import { useUser } from '@/api';
import { useUserStructures } from '@/api';
import { useAuth } from '@/auth';
import { Page, Tabs } from '@/ui';
import { getFullName } from '@/utils';

import { getUserParams } from './Profile.utils';
import { ProfileInfo } from './profile-info';
import { ProfileTeams } from './profile-teams';

/**
 * Компонент `Profile` отображает страницу профиля пользователя.
 */
export function Profile() {
  const { state } = useLocation();
  const { id } = useParams();
  const { user, isLoading: isUserLoading } = useAuth();
  const { userId, editable } = getUserParams(id, user);
  const { data, isLoading, error } = useUser(userId);
  const {
    data: teams,
    isLoading: isTeamsLoading,
    error: teamsError,
  } = useUserStructures(userId);
  const userName = getFullName(data?.data);
  const emptyData = !data?.data && !isLoading;
  const prev = state?.prev;

  return (
    <Page
      title="Профиль"
      seoTitle={data ? `${userName} :: Профиль` : undefined}
      back={prev}
      isEmpty={emptyData || !user}
      isLoading={!data?.data?.id || isTeamsLoading || isUserLoading}
      error={(error ?? teamsError) as GenericError}
    >
      <Tabs
        defaultActive="profile"
        items={[
          {
            id: 'profile',
            title: editable ? 'Мой профиль' : 'Профиль',
            children: (
              <ProfileInfo
                data={data?.data}
                editable={editable}
              />
            ),
          },
          {
            id: 'teams',
            title: 'Команды',
            children: (
              <ProfileTeams
                data={teams?.data ?? []}
                info={data?.data}
                editable={editable}
              />
            ),
          },
        ]}
      />
    </Page>
  );
}
