import { Link, useLocation } from 'react-router';
import { IconCake } from '@tabler/icons-react';

import type { UserDetail } from '@/api';
import { useUpdateMe } from '@/api';
import { useAuth } from '@/auth';
import {
  Card,
  Contact,
  Definition,
  Leave,
  Pills,
  Status,
  Textarea,
  User,
} from '@/ui';
import { formatPhone } from '@/utils';
import { getDatePeriod } from '@/utils';
import { getFullName } from '@/utils';
import { getWeekDay } from '@/utils';
import { getZoneTime } from '@/utils';

import { Parameter, ProfileAvatar } from './components';
import { getBirthday } from './ProfileInfo.utils';

import './ProfileInfo.styles.css';

type ProfileInfoProps = {
  data?: UserDetail;
  editable: boolean;
};

/**
 * Компонент `ProfileInfo` отображает информацию о пользователе.
 *
 * @param data - Данные о пользователе.
 * @param editable - Флаг доступности редактирования.
 */
export function ProfileInfo({ data, editable }: ProfileInfoProps) {
  const { pathname } = useLocation();
  const { user } = useAuth();
  const { mutate, isPending } = useUpdateMe(data?.id);
  const name = getFullName(data);
  const backupName = getFullName(data?.workInfo.backup);
  const birthday = data?.birthday ? getBirthday(data?.birthday) : null;
  const time = getZoneTime(data?.timezone || 'Europe/Moscow');
  const phone = formatPhone(data?.phone);
  const officeDays = data?.workInfo?.officeDays ?? [1, 2, 3, 4, 5];
  const officeDayNames = officeDays.map(getWeekDay).filter(Boolean);
  const officeDaysValue = officeDayNames.join(', ');
  const editableAvatar = false;
  const isMe = data?.id === user?.id;
  const hasPersonal = !!data?.birthday || !!data?.description;
  const hasPersonalNotMe = !isMe && hasPersonal;
  const showPersonal = isMe || hasPersonalNotMe;
  const showStatus = false;
  const showWorkInfo = false;
  const backState = {
    prev: {
      title: 'Назад к профилю',
      href: pathname,
    },
  };

  function handleDescriptionUpdate(description: string) {
    mutate({ description });
  }

  return (
    <div className="profile-info">
      <div className="profile-info-person">
        <Card>
          <div className="profile-info-person-content">
            <ProfileAvatar
              id={data?.id}
              editable={editable && editableAvatar}
              src={data?.avatar}
              name={name}
            />
            {showStatus && (
              <Status
                variant="green"
                title={data?.workInfo.status || 'В офисе'}
              />
            )}
            <div className="profile-info-timezone">{time}</div>
          </div>
        </Card>
      </div>
      <div className="profile-info-details">
        <Card>
          <Card.Section>
            <div className="profile-info-title">{name}</div>
            {data?.structures.map(team => (
              <div
                key={team.id}
                className="profile-info-position"
              >
                {team.role} в&nbsp;
                <Link
                  to={`/teams/${team.id}`}
                  state={backState}
                >
                  {team.name}
                </Link>
              </div>
            ))}
          </Card.Section>
          {(data?.phone || data?.email || data?.telegram) && (
            <Card.Section title="Контакты">
              <div className="profile-info-contacts">
                {data?.phone && (
                  <Contact
                    type="phone"
                    value={phone}
                  />
                )}
                {data?.email && (
                  <Contact
                    type="email"
                    value={data.email}
                  />
                )}
                {data?.telegram && (
                  <Contact
                    type="telegram"
                    value={data.telegram}
                  />
                )}
              </div>
            </Card.Section>
          )}
          {!!data?.skills.length && (
            <Card.Section title="Навыки">
              <Pills
                value={data.skills}
                editable={false}
              />
            </Card.Section>
          )}
          {showPersonal && (
            <Card.Section title="Личная информация">
              {birthday && <Parameter icon={IconCake}>{birthday}</Parameter>}
              {(!!data?.description?.length || editable) && (
                <Textarea
                  placeholder="О себе"
                  value={data?.description}
                  autosize={true}
                  minRows={1}
                  maxRows={6}
                  loading={isPending}
                  disabled={!editable}
                  onSubmit={handleDescriptionUpdate}
                />
              )}
            </Card.Section>
          )}
        </Card>
      </div>
      {!!data?.absence?.length && (
        <div className="profile-info-leaves">
          <Card title="Отсутствия">
            {data.absence.map(absence => {
              const period = getDatePeriod(absence.startDate, absence.endDate);

              return (
                <Card.Section key={absence.id}>
                  <Leave
                    variant={absence.name}
                    period={period}
                    reason={absence.description}
                  />
                </Card.Section>
              );
            })}
          </Card>
        </div>
      )}
      {data?.workInfo.backup && (
        <div className="profile-info-backup">
          <Card title="Замещающий">
            <Link
              to={`/profile/${data.workInfo.backup.id}`}
              state={backState}
            >
              <User
                avatar={data.workInfo.backup.avatar}
                title={backupName}
                description={data.workInfo.backup.position}
              />
            </Link>
          </Card>
        </div>
      )}
      {data?.workInfo && showWorkInfo && (
        <div className="profile-info-office">
          <Card title="Режим работы">
            {data.workInfo.office && (
              <Definition
                label="Адрес офиса:"
                value={data.workInfo.office}
              />
            )}
            {data.workInfo.workType && (
              <Definition
                label="Режим работы:"
                value={data.workInfo.workType}
              />
            )}
            {officeDaysValue && (
              <Definition
                label="В офисе:"
                value={officeDaysValue}
              />
            )}
          </Card>
        </div>
      )}
    </div>
  );
}
