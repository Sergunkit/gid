import { render } from '@testing-library/react';

import { NotificationContent } from './Notification.content';

describe('UI/Notification/NotificationContent', () => {
  it('Отображает содержимое уведомления с именем пользователя', () => {
    const { container } = render(
      <NotificationContent
        type="birthday"
        person={{
          name: 'Иван Петров',
          link: '/profile',
        }}
        text=""
      />,
    );

    expect(container).toHaveTextContent('Иван Петров');
  });

  it('Отображает содержимое уведомления со ссылкой', () => {
    const { container } = render(
      <NotificationContent
        text="Доброе утро"
        link="/"
        type="birthday"
      />,
    );

    expect(container).toHaveTextContent('Доброе утро');
    expect(container).toHaveTextContent('Читать новость');
  });

  it('Отображает содержимое уведомления в виде текста', () => {
    const { container } = render(
      <NotificationContent
        text="Добрый день!"
        type="message"
      />,
    );

    expect(container).toHaveTextContent('Добрый день!');
  });
});
