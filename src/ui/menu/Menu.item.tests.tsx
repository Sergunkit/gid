import { IconDownload } from '@tabler/icons-react';
import { fireEvent, screen } from '@testing-library/react';

import { renderWrapped } from '@/testing';
import { MenuItem } from '@/ui';

describe('UI/Menu/MenuItem', () => {
  it('Отображает кнопку, если задан параметр `onClick`', () => {
    const spy = vi.fn();

    renderWrapped(
      <MenuItem
        title="Элемент в виде кнопки"
        icon={IconDownload}
        onClick={spy}
      />,
    );
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('menu-item');

    fireEvent.click(button);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('Отображает ссылку, если задан параметр `url`', () => {
    renderWrapped(
      <MenuItem
        title="Элемент в виде ссылки"
        icon={IconDownload}
        url="/test"
      />,
    );
    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('menu-item');
    expect(link).toHaveAttribute('href', '/test');
  });

  it('Отображает активный элемент меню, если задан параметр `current`', () => {
    renderWrapped(
      <MenuItem
        title="Элемент в виде ссылки"
        icon={IconDownload}
        current="/test"
        index={0}
        url="/test"
      />,
    );
    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('menu-item active');
  });
});
