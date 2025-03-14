import * as React from 'react';

import { IconBell } from '@tabler/icons-react';

import { useClickOutside } from '../../indexHooks.ts';

import { NotificationItems } from './Notification.items.tsx';
import type { NotificationGroup } from './Notification.types.ts';

import './Notification.panel.styles.css';

type NotificationPanelProps = {
  items: NotificationGroup[];
  defaultOpened?: boolean;
};

type PanelRef = React.RefObject<HTMLDivElement | null>;

export function NotificationPanel({
  items,
  defaultOpened = false,
}: NotificationPanelProps) {
  const [opened, setOpened] = React.useState(defaultOpened);
  const ref: PanelRef = useClickOutside(handleClose);
  const hasUnread = items
    .map(group => group.items.some(item => item.unread))
    .some(Boolean);

  function handleToggle() {
    setOpened(value => !value);
  }

  function handleClose() {
    setOpened(false);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (opened && event.key === 'Escape') {
      handleClose();
    }
  }

  return (
    <div
      ref={ref}
      className="notification-panel"
      onKeyDown={handleKeyDown}
    >
      <button
        type="button"
        className={`notification-panel-icon${hasUnread ? ' unread' : ''}`}
        onClick={handleToggle}
      >
        <IconBell
          size={26}
          stroke={1.5}
        />
      </button>
      <div
        role="list"
        tabIndex={-1}
        className={`notification-panel-list${opened ? ' opened' : ''}`}
      >
        <div className="notification-panel-content">
          <NotificationItems items={items} />
        </div>
      </div>
    </div>
  );
}
