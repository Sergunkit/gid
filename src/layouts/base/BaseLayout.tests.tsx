import { fireEvent, screen } from '@testing-library/react';

import * as auth from '@/auth';
import { BaseLayout } from '@/layouts';
import { renderWrapped } from '@/testing';

const routes = [
  {
    path: '/',
    element: <div>Test</div>,
  },
];

const navigateSpy = vi.fn();

vi.mock('react-router', async importOriginal => {
  const original = await importOriginal<typeof import('react-router')>();

  return {
    ...original,
    useNavigate: () => navigateSpy,
  };
});

describe('BaseLayout', () => {
  it('Отображает дочерние компоненты', () => {
    vi.spyOn(auth, 'useAuth').mockImplementation(() => ({
      isAuthenticated: true,
      isLoading: false,
      error: undefined,
      user: undefined,
      login: vi.fn(),
      logout: vi.fn(),
    }));

    renderWrapped(<BaseLayout />, routes);

    const content = screen.getByText('Test');

    expect(content).toBeInTheDocument();
  });

  it('Вызывает метод `logout` при нажатии на выход', async () => {
    const logoutSpy = vi.fn();

    vi.spyOn(auth, 'useAuth').mockImplementation(() => ({
      isAuthenticated: true,
      isLoading: false,
      error: undefined,
      user: undefined,
      login: vi.fn(),
      logout: logoutSpy,
    }));

    renderWrapped(<BaseLayout />, routes);

    const button = screen.getByRole('button', { name: 'Выйти' });
    const redirectUri = window.location.origin + '/auth';

    fireEvent.click(button);

    expect(logoutSpy).toHaveBeenCalledTimes(1);
    expect(logoutSpy).toHaveBeenCalledWith({ redirectUri });
  });

  it('Переходит на страницу авторизации', () => {
    vi.spyOn(auth, 'useAuth').mockImplementation(() => ({
      isAuthenticated: false,
      isLoading: false,
      error: undefined,
      user: undefined,
      login: vi.fn(),
      logout: vi.fn(),
    }));
    const options = { viewTransition: true };

    renderWrapped(<BaseLayout />, routes);

    expect(navigateSpy).toHaveBeenCalledTimes(1);
    expect(navigateSpy).toHaveBeenCalledWith('/auth', options);
  });
});
