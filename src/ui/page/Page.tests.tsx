import { screen } from '@testing-library/react';

import { GenericError } from '@/api';
import { renderWrapped } from '@/testing';
import { Page } from '@/ui';

const navigateSpy = vi.fn();

vi.mock('react-router', async importOriginal => {
  const original = await importOriginal<typeof import('react-router')>();

  return {
    ...original,
    useNavigate: () => navigateSpy,
  };
});

describe('UI/Page', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('Отображает компонент Page', () => {
    renderWrapped(
      <Page title="Заголовок">
        <>Содержимое</>
      </Page>,
    );
    const title = screen.getByText('Заголовок');
    const content = screen.getByText('Содержимое');

    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });

  it('Отображает ссылку `назад`', () => {
    const back = {
      title: 'Назад к содержимому',
      href: '/back',
    };

    const { container } = renderWrapped(
      <Page
        title="Заголовок"
        back={back}
      >
        <>Содержимое</>
      </Page>,
    );
    const link = container.querySelector('.page-header-back');

    expect(link).toBeInTheDocument();
  });

  it('Перенаправляет на страницу входа, если код ошибки 401 или 403', () => {
    const replace = vi.fn();
    const error = new GenericError(
      'unauthorized',
      'Пользователь не авторизован',
      401,
    );

    vi.stubGlobal('location', { replace });

    renderWrapped(
      <Page
        title="Заголовок"
        error={error}
      >
        <>Содержимое</>
      </Page>,
    );

    expect(replace).toHaveBeenCalledTimes(1);
    expect(replace).toHaveBeenCalledWith('/auth');
  });

  it('Перенаправляет на страницу ошибки, если код ошибки не 401 или 403', () => {
    const code = 421;
    const error = new GenericError(
      'something_wrong',
      'Произошла ошибка!',
      code,
    );
    const params = {
      state: { code },
      viewTransition: true,
      replace: true,
    };

    renderWrapped(
      <Page
        title="Заголовок"
        error={error}
      >
        <>Содержимое</>
      </Page>,
    );

    expect(navigateSpy).toHaveBeenCalledTimes(1);
    expect(navigateSpy).toHaveBeenCalledWith('/error', params);
  });
});
