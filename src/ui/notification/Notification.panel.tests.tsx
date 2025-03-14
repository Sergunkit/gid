import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { NotificationPanel } from '@/ui';

import type { NotificationGroup } from './Notification.types';

const itemsWithUnread: NotificationGroup[] = [
  {
    id: '1',
    title: 'Сегодня',
    items: [
      {
        id: '1',
        link: '/',
        text: 'Доброе утро',
        type: 'message',
        unread: true,
      },
      {
        id: '2',
        link: '/',
        text: 'Добрый вечер',
        type: 'message',
        unread: false,
      },
    ],
  },
];

const items: NotificationGroup[] = [
  {
    id: '1',
    title: 'Сегодня',
    items: [
      {
        id: '1',
        link: '/',
        text: 'Доброе утро',
        type: 'message',
        unread: false,
      },
      {
        id: '2',
        link: '/',
        text: 'Добрый вечер',
        type: 'message',
        unread: false,
      },
    ],
  },
];

describe('UI/Notification/NotificationPanel', () => {
  it('Отображает компонент NotificationPanel', () => {
    const { container } = render(<NotificationPanel items={itemsWithUnread} />);
    const button = screen.getByRole('button');
    const panel = container.querySelector('.notification-panel');
    const notifications = container.querySelectorAll('.notification');
    const unread = container.querySelectorAll('.notification.unread');

    expect(button).toHaveClass('notification-panel-icon');
    expect(button).toHaveClass('unread');
    expect(panel).toHaveClass('notification-panel');
    expect(notifications).toHaveLength(2);
    expect(unread).toHaveLength(1);
  });

  it('Переключает видимость панели', async () => {
    const { container } = render(<NotificationPanel items={items} />);
    const button = screen.getByRole('button');
    const list = container.querySelector('.notification-panel-list');
    const hasUnread = items
      .map(group => group.items.some(item => item.unread))
      .some(Boolean);

    expect(hasUnread).toBeFalsy();
    expect(button).not.toHaveClass('unread');
    expect(list?.className).toBe('notification-panel-list');

    await userEvent.click(button);

    expect(list?.className).toBe('notification-panel-list opened');
  });

  it('Скрывает панель при клике вне компонента', async () => {
    render(
      <div className="wrapper">
        <NotificationPanel
          items={items}
          defaultOpened={true}
        />
        <div data-testid="outside-target" />
      </div>,
    );
    const target = screen.getByTestId('outside-target');
    const list = screen.getByRole('list');

    expect(list).toHaveClass('opened');

    await userEvent.click(target);

    expect(list).not.toHaveClass('opened');
  });

  it('Скрывает панель при нажатии на `Escape`', async () => {
    render(
      <NotificationPanel
        items={items}
        defaultOpened={true}
      />,
    );
    const list = screen.getByRole('list');

    expect(list).toHaveClass('opened');

    await userEvent.type(list, '{Escape}');

    expect(list).not.toHaveClass('opened');

    await userEvent.type(list, '{Escape}');

    expect(list).not.toHaveClass('opened');
  });
});
