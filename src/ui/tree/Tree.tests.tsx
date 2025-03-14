import { fireEvent, screen } from '@testing-library/react';

import { renderWrapped } from '@/testing';
import { Tree } from '@/ui';

import type { TreeEntry } from './Tree.types';

const items: TreeEntry[] = [
  {
    id: 1,
    level: 0,
    name: 'ЕПВ',
    count: 16,
    priority: 1,
    children: null,
  },
  {
    id: 2,
    level: 0,
    name: 'R&D',
    count: 16,
    priority: 1,
    children: [
      {
        id: 3,
        level: 1,
        name: 'Команда 1',
        count: 10,
        priority: 1,
        children: null,
      },
      {
        id: 4,
        level: 1,
        name: 'Команда 2',
        count: 6,
        priority: 2,
        children: null,
      },
    ],
  },
];

describe('UI/Tree', () => {
  it('Отображает список элементов меню', () => {
    renderWrapped(
      <Tree
        items={items}
        current="3"
        url="/items"
      />,
    );
    const links = screen.getAllByRole('link');

    expect(links).toHaveLength(4);
  });

  it('Добавляет активный класс для элемента меню', () => {
    renderWrapped(
      <Tree
        items={items}
        current="3"
        url="/items"
      />,
      [
        {
          path: '/items/:id',
          element: <div>Контент</div>,
        },
      ],
    );
    const link = screen.getByRole('link', { name: 'Команда 1' });

    fireEvent.click(link);

    expect(link.parentElement).toHaveClass('tree-item active');
  });
});
