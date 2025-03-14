import * as React from 'react';

import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Textarea } from '@/ui';

type TextareaRef = {
  focus: () => void;
  blur: () => void;
};

describe('UI/Textarea', () => {
  it('Отображает компонент Textarea', () => {
    const value = 'Содержимое текстового поля';
    const { container } = render(<Textarea value={value} />);
    const element = container.firstChild;

    expect(element).toBeInTheDocument();
  });

  it('Отображает индикатор загрузки при наличии параметра `loading`', () => {
    const value = 'Содержимое текстового поля';
    const { container } = render(
      <Textarea
        value={value}
        loading
      />,
    );
    const loader = container.querySelector('.loader');

    expect(loader).toBeInTheDocument();
  });

  it('Устанавливает фокус на элементе текстового поля', () => {
    render(<Textarea ref={ref => ref?.focus()} />);
    const element = screen.getByRole('textbox');
    const activeElement = document.activeElement;

    expect(element).toBe(activeElement);
  });

  it('Устанавливает и убирает фокус с элемента текстового поля', () => {
    const controlRef = React.createRef<TextareaRef>();

    render(<Textarea ref={controlRef} />);
    const element = screen.getByRole('textbox');

    act(() => controlRef.current?.focus());
    let activeElement = document.activeElement;

    expect(element).toBe(activeElement);
    act(() => controlRef.current?.blur());
    activeElement = document.activeElement;

    expect(element).not.toBe(activeElement);
  });

  it('Вызывает событие `onChange` при изменении значения', async () => {
    const onSubmit = vi.fn();

    render(<Textarea onSubmit={onSubmit} />);
    const element = screen.getByRole('textbox');
    const submit = document.querySelector('button[type="submit"]');

    act(() => element.focus());
    await userEvent.type(element, 'Тестовое содержимое');
    act(() => element.blur());
    await userEvent.click(submit!);

    expect(element).toHaveValue('Тестовое содержимое');
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith('Тестовое содержимое');
  });

  it('Сбрасывает значение при нажатии на кнопку `ESC', async () => {
    render(<Textarea />);
    const wrapper = document.querySelector('.textarea');
    const element = screen.getByRole('textbox');

    act(() => element.focus());
    await userEvent.type(element, 'Тестовое содержимое');
    await userEvent.keyboard('{Escape}');

    expect(element).toHaveValue('');
    expect(wrapper).not.toHaveClass('focused');
  });
});
