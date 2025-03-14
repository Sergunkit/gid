import { render, screen } from '@testing-library/react';

import { Notification } from '@/ui';

describe('Notification', () => {
  it('Отображает компонент Notification', () => {
    const { container } = render(
      <Notification
        type="birthday"
        text=""
      />,
    );
    const text = container.querySelector('.notification-text');

    expect(text).toBeEmptyDOMElement();
  });

  it('Отображает уведомление с классом `unread`', () => {
    render(
      <Notification
        type="birthday"
        text="Уведомление"
        unread
      />,
    );
    const element = screen.getByRole('listitem');

    expect(element).toHaveClass('unread');
  });

  it('Отображает уведомление без класса `unread`', () => {
    render(
      <Notification
        type="birthday"
        text="Уведомление"
      />,
    );
    const element = screen.getByRole('listitem');

    expect(element).not.toHaveClass('unread');
  });

  it('Отображает уведомление со ссылкой', () => {
    const { container } = render(
      <Notification
        type="birthday"
        text="Уведомление"
        link="/"
      />,
    );
    const link = container.querySelector('.notification-link');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
});
