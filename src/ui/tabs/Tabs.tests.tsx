import { fireEvent, render, screen } from '@testing-library/react';

import { Tabs } from '@/ui';

const items = [
  {
    id: 'my-profile',
    title: 'Мой профиль',
    children: <>Содержимое вкладки &laquo;Мой профиль&raquo;</>,
  },
  {
    id: 'teams',
    title: 'Команды',
    children: <>Содержимое вкладки &laquo;Команды&raquo;</>,
  },
];

const itemsWithDisabled = [
  ...items,
  {
    id: 'disabled',
    title: 'Заблокированная вкладка',
    children: <>Содержимое вкладки &laquo;Отключенная вкладка&raquo;</>,
    disabled: true,
  },
];

describe('UI/Tabs', () => {
  it('Не отображает компонент, если массив `items` пустой', () => {
    const { container } = render(<Tabs items={[]} />);
    const element = container.firstChild;

    expect(element).toBeNull();
  });

  it('Отображает компонент', () => {
    render(<Tabs items={items} />);
    const element = screen.getByRole('tablist');
    const tabs = screen.getAllByRole('tab');

    expect(element).toHaveClass('tabs');
    expect(tabs).toHaveLength(items.length);
    expect(tabs[0]).toHaveClass('tabs-item active');
  });

  it('Отображает компонент с активной вкладкой', () => {
    render(
      <Tabs
        defaultActive="teams"
        items={items}
      />,
    );
    const tabs = screen.getAllByRole('tab');

    expect(tabs).toHaveLength(items.length);
    expect(tabs[1]).toHaveClass('tabs-item active');
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true');
  });

  it('Отображает компонент с заблокированной вкладкой', () => {
    const { container } = render(<Tabs items={itemsWithDisabled} />);
    const tabs = container.querySelectorAll('.tabs-item');

    expect(tabs).toHaveLength(itemsWithDisabled.length);
    expect(tabs[2]).toHaveClass('tabs-item disabled');
    expect(tabs[2]).toHaveAttribute('aria-hidden', 'true');
  });

  it('Вызывает функцию onChange при клике на вкладку `Команды`', () => {
    const spy = vi.fn();

    render(
      <Tabs
        items={items}
        onChange={spy}
      />,
    );
    const tabs = screen.getAllByRole('tab');

    fireEvent.click(tabs[1]);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(items[1].id);
  });
});
