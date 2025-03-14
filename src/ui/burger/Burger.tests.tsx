import { fireEvent, render, screen } from '@testing-library/react';

import { Burger } from '@/ui';

describe('UI/Burger', () => {
  it('Отображает компонент Burger', () => {
    render(<Burger />);
    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('aria-label', 'Открыть меню');
  });

  it('Отображает компонент с пользовательской меткой', () => {
    const label = 'Свернуть меню';

    render(<Burger label={label} />);
    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('aria-label', label);
  });

  it('Вызывает обработчик `onClick` при нажатии на кнопку', () => {
    const spy = vi.fn();

    render(<Burger onClick={spy} />);
    const button = screen.getByRole('button');
    const burger = button.firstChild;

    fireEvent.click(button);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(true);
    expect(burger).toHaveAttribute('data-opened', 'true');
  });

  it('Обновляет состояние кнопки при изменении входных параметров', () => {
    const spy = vi.fn();
    const { rerender } = render(
      <Burger
        defaultOpened
        onClick={spy}
      />,
    );
    const button = screen.getByLabelText('Открыть меню');

    fireEvent.click(button);

    rerender(<Burger defaultOpened={false} />);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(false);
  });
});
