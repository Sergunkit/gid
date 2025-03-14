import { fireEvent, render, screen } from '@testing-library/react';

import { Breadcrumbs } from '@/ui';

const items = [
  {
    title: 'Компания',
    href: '/',
  },
  {
    title: 'Отдел',
    href: '/department',
  },
  {
    title: 'Команда',
    href: '/department/team',
  },
];

describe('UI/Breadcrumbs', () => {
  it('Отображает компонент Breadcrumbs', () => {
    render(<Breadcrumbs items={items} />);
    const links = screen.queryAllByRole('link');

    expect(links).toHaveLength(items.length);
  });

  it('Переключает режим отображения и сохраняет состояние', () => {
    render(<Breadcrumbs items={items} />);
    const button = screen.getByText('Вся структура');
    const status = window.localStorage.getItem('breadcrumbs-opened');

    expect(status).toBeNull();

    fireEvent.click(button);
    const newStatus = window.localStorage.getItem('breadcrumbs-opened');

    expect(newStatus).toBe('true');
  });
});
