import { render } from '@testing-library/react';

import { NotificationItems } from './Notification.items';
import type { NotificationGroup } from './Notification.types';

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

describe('UI/Notification/NotificationItems', () => {
  it('Отображает компонент NotificationItems', () => {
    const { container } = render(<NotificationItems items={items} />);
    const notifications = container.querySelectorAll('.notification');

    expect(notifications).toHaveLength(2);
  });

  it('Отображает сообщение об отсутствии уведомлений', () => {
    const { container } = render(<NotificationItems items={[]} />);
    const selector = '.notification-panel-empty';
    const element = container.querySelector(selector);

    expect(element).toBeInTheDocument();
  });
});
