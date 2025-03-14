import { NotificationContent } from './Notification.content';
import type { NotificationProps } from './Notification.types';
import { getNotificationIcon } from './Notification.utils';

import './Notification.styles.css';

/**
 * Компонент `Notification` отображает пользовательское уведомление,
 * состоящее из иконки заданного типа и текста уведомление.
 *
 * @param link - Ссылка на новость.
 * @param person - Данные о пользователе.
 * @param text - Текст уведомления.
 * @param type - Тип уведомления.
 * @param unread - Непрочитанное уведомление.
 */
export function Notification({
  link,
  person,
  text,
  type,
  unread = false,
}: NotificationProps) {
  const Icon = getNotificationIcon(type);

  return (
    <div
      role="listitem"
      className={`notification${unread ? ' unread' : ''}`}
    >
      <div className="notification-icon">
        <Icon
          size={14}
          stroke={1.75}
        />
      </div>
      <div className="notification-text">
        <NotificationContent
          link={link}
          person={person}
          text={text}
          type={type}
        />
      </div>
    </div>
  );
}
