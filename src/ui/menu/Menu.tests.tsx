import { IconHome } from '@tabler/icons-react';
import { screen } from '@testing-library/react';

import { renderWrapped } from '@/testing';
import { Menu } from '@/ui';

import type { MenuEntry } from './Menu.types';

describe('UI/Menu', () => {
  it('Отображает список элементов меню', () => {
    const items: MenuEntry[] = [
      {
        url: '/',
        title: 'Главная',
        icon: IconHome,
      },
      {
        url: '/about',
        title: 'О нас',
        icon: IconHome,
      },
    ];

    renderWrapped(
      <Menu
        items={items}
        current="/"
      />,
    );
    const firstChild = screen.getByRole('link', { name: 'Главная' });
    const lastChild = screen.getByRole('link', { name: 'О нас' });

    expect(firstChild).toBeInTheDocument();
    expect(firstChild).toHaveClass('menu-item');
    expect(firstChild).toHaveAttribute('href', '/');
    expect(lastChild).toBeInTheDocument();
    expect(lastChild).toHaveClass('menu-item');
    expect(lastChild).toHaveAttribute('href', '/about');
  });

  it('Добавляет активный класс для элемента меню', () => {
    const items: MenuEntry[] = [
      {
        url: '/',
        title: 'Главная',
        icon: IconHome,
      },
      {
        url: '/about',
        title: 'О нас',
        icon: IconHome,
      },
    ];

    renderWrapped(
      <Menu
        items={items}
        current="/"
      />,
    );
    const firstChild = screen.getByRole('link', { name: 'Главная' });
    const lastChild = screen.getByRole('link', { name: 'О нас' });

    expect(firstChild).toBeInTheDocument();
    expect(firstChild).toHaveClass('menu-item active');
    expect(lastChild).toBeInTheDocument();
    expect(lastChild).not.toHaveClass('menu-item active');
  });
});
