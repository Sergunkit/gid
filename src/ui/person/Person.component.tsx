import * as React from 'react';

import type { Skill } from '../../indexUtils.ts';
import { Avatar, Card, Contact, Pills } from '../../indexUI.ts';
import { getZoneTime } from '../../indexUtils.ts';

import './Person.styles.css';

type PersonProps = {
  avatar: string;
  name: string;
  teams: string[];
  skills: Skill[];
  timezone: string;
  phone?: string;
  email?: string;
  telegram?: string;
};

/**
 * Компонент `Person` отображает базовую информацию о пользователе,
 * включая его контактные данные, команды, навыки и текущее время.
 *
 * @param avatar - Путь к изображению пользователя.
 * @param name - Имя пользователя.
 * @param teams - Список команд пользователя.
 * @param skills - Список навыков пользователя.
 * @param timezone - Часовой пояс пользователя.
 * @param phone - Номер телефона пользователя.
 * @param email - Электронная почта пользователя.
 * @param telegram - Никнейм пользователя в Telegram.
 */
export function Person({
  avatar,
  name,
  teams,
  skills,
  timezone,
  phone,
  email,
  telegram,
}: PersonProps) {
  const time = getZoneTime(timezone);

  function handleContactsClick(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
    event.preventDefault();
  }

  return (
    <Card rootClass="person">
      <Card.Content className="person-content">
        <div className="person-avatar">
          <Avatar
            type="static"
            src={avatar}
            size="medium"
            name={name}
          />
          <div className="person-timezone">{time}</div>
        </div>
        <div className="person-details">
          <div className="person-header">
            <div className="person-name">{name}</div>
            <div className="person-teams">
              {teams.map((team: string, index: number) => (
                <span
                  key={index}
                  className="person-team"
                >
                  {team}
                </span>
              ))}
            </div>
            <div
              className="person-contacts"
              onClick={handleContactsClick}
            >
              {phone && (
                <Contact
                  type="phone"
                  value={phone}
                  showValue={false}
                />
              )}
              {email && (
                <Contact
                  type="email"
                  value={email}
                  showValue={false}
                />
              )}
              {telegram && (
                <Contact
                  type="telegram"
                  value={telegram}
                  showValue={false}
                />
              )}
            </div>
          </div>
          <div className="person-skills">
            <Pills
              value={skills}
              maximum={10}
            />
          </div>
        </div>
      </Card.Content>
    </Card>
  );
}
