import { act, fireEvent, screen } from '@testing-library/react';

import * as auth from '@/auth';
import { Welcome } from '@/pages';
import { renderWrapped } from '@/testing';

const navigateSpy = vi.fn();

vi.mock('react-router', async importOriginal => {
  const original = await importOriginal<typeof import('react-router')>();

  return {
    ...original,
    useNavigate: () => navigateSpy,
  };
});

describe('Welcome', () => {
  it('Отображает загрузчик при первичной отрисовке компонента', () => {
    renderWrapped(<Welcome />);
    const loader = screen.getByRole('status');

    expect(loader).toBeInTheDocument();
  });

  it('Отображает содержимое страницы', () => {
    vi.spyOn(auth, 'useAuth').mockImplementation(() => ({
      isAuthenticated: false,
      isLoading: false,
      error: undefined,
      user: undefined,
      login: vi.fn(),
      logout: vi.fn(),
    }));

    renderWrapped(<Welcome />);
    const title = [
      'ГИД.Люди – цифровая среда для сотрудников и руководителей',
      ' для автоматизации HR-процессов и документооборота.',
    ];
    const text = 'Уникальная разработка с более 1 млн пользователей';
    const titleElement = screen.getByText(title.join(''));
    const textElement = screen.getByText(text);

    expect(titleElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });

  it('Перенаправляет на главную страницу, если пользователь авторизован', () => {
    vi.spyOn(auth, 'useAuth').mockImplementation(() => ({
      isAuthenticated: true,
      isLoading: false,
      error: undefined,
      user: undefined,
      login: vi.fn(),
      logout: vi.fn(),
    }));

    renderWrapped(<Welcome />);

    expect(navigateSpy).toHaveBeenCalledTimes(1);
    expect(navigateSpy).toHaveBeenCalledWith('/');
  });

  it('Вызывает метод `login` при нажатии на кнопку входа', async () => {
    const loginSpy = vi.fn();

    vi.spyOn(auth, 'useAuth').mockImplementation(() => ({
      isAuthenticated: false,
      isLoading: false,
      error: undefined,
      user: undefined,
      login: loginSpy,
      logout: vi.fn(),
    }));

    renderWrapped(<Welcome />);
    const button = screen.getByRole('button');

    await act(() => fireEvent.click(button));

    expect(loginSpy).toHaveBeenCalledTimes(1);
  });
});
