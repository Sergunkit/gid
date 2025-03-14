import { screen } from '@testing-library/react';

import { renderWrapped } from '@/testing';

import { TreeItem } from './Tree.item';

const item = {
  id: 5,
  level: 2,
  name: 'Заголовок ссылки',
  count: 8,
  priority: 2,
  children: null,
  current: '0',
  url: '/',
};

describe('UI/Tree/TreeItem', () => {
  it('Отображает компонент TreeItem', () => {
    renderWrapped(
      <TreeItem
        {...item}
        children={[]}
      />,
    );
    const link = screen.getByRole('link');
    const counter = link.querySelector('.tree-item-count-value');
    const name = link.querySelector('.tree-item-name');

    expect(link).toBeInTheDocument();
    expect(counter).not.toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(name).toHaveTextContent(item.name);
    expect(link.parentElement).toHaveClass('tree-item empty');
  });

  it('Отображает компонент с счетчиком', () => {
    renderWrapped(
      <TreeItem
        {...item}
        children={[]}
        showCount
      />,
    );
    const link = screen.getByRole('link');
    const counter = link.querySelector('.tree-item-count-value');

    expect(link).toBeInTheDocument();
    expect(counter).toBeInTheDocument();
    expect(counter).toHaveTextContent(`${item.count}`);
  });
});
