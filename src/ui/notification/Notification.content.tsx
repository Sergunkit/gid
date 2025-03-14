import type { NotificationProps } from './Notification.types';

/**
 * Компонент `NotificationContent` отображает текстовое содержимое уведомления,
 * в зависимости от типа уведомления и переданных параметров.
 *
 * @param link - Ссылка на новость.
 * @param person - Данные о пользователе.
 * @param text - Текст уведомления.
 * @param type - Тип уведомления.
 */
export function NotificationContent({
  link,
  person,
  text,
  type,
}: NotificationProps) {
  if (type === 'birthday' && person) {
    return (
      <>
        <a
          className="notification-person"
          href={person.link}
        >
          {person.name}
        </a>
        &nbsp;
        <span>празднует свой день рождения!</span>
      </>
    );
  }

  if (link) {
    return (
      <>
        <span>{text}</span>
        &nbsp;
        <a
          className="notification-link"
          href={link}
        >
          Читать новость
        </a>
      </>
    );
  }

  return text;
}
