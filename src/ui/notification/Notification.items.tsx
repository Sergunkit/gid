import { IconBellOff } from '@tabler/icons-react';

import { Notification } from './Notification.component.tsx';

import type { NotificationGroup } from './Notification.types.ts';

type NotificationItemsProps = { items: NotificationGroup[] };

export function NotificationItems({ items }: NotificationItemsProps) {
  if (!items.length) {
    return (
      <div className="notification-panel-empty">
        <div className="notification-panel-empty-icon">
          <IconBellOff
            size={12}
            stroke={1.75}
          />
        </div>
        <div className="notification-panel-empty-text">
          Новых уведомлений нет
        </div>
      </div>
    );
  }

  return items.map(group => (
    <div
      key={group.id}
      className="notification-group"
    >
      <div className="notification-group-title">{group.title}</div>
      <div className="notification-group-items">
        {group.items.map(item => (
          <Notification
            key={item.id}
            link={item.link}
            person={item.person}
            text={item.text}
            type={item.type}
            unread={item.unread}
          />
        ))}
      </div>
    </div>
  ));
}
