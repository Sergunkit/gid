import { screen, within } from '@testing-library/react';

import { server } from '@/mocks';
import { Profile } from '@/pages';
import { renderWrapped } from '@/testing';

describe('Profile', () => {
  it('Отображает страницу личного профиля', () => {
    const routes = [
      {
        path: '/:id?',
        element: <Profile />,
      },
    ];

    renderWrapped(<Profile />, routes);

    server.events.on('request:end', () => {
      const tabs = screen.getByRole('tablist');
      const title = screen.getByRole('heading', { level: 1 });
      const tabProfile = within(tabs).getByText('Мой профиль');
      const tabTeams = within(tabs).getByText('Команды');

      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent('Профиль');
      expect(tabProfile).toBeInTheDocument();
      expect(tabTeams).toBeInTheDocument();
    });
  });

  it('Отображает страницу профиля пользователя', () => {
    location.href = '/123';
    const routes = [
      {
        path: '/:id?',
        element: <Profile />,
      },
    ];

    renderWrapped(<Profile />, routes);

    server.events.on('request:end', () => {
      const tabs = screen.getByRole('tablist');
      const title = screen.getByRole('heading', { level: 1 });
      const tabProfile = within(tabs).getByText('Профиль');
      const tabTeams = within(tabs).getByText('Команды');

      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent('Профиль');
      expect(tabProfile).toBeInTheDocument();
      expect(tabTeams).toBeInTheDocument();
    });
  });
});
