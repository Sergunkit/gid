import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from '@/ui';

describe('UI/Button', () => {
  it('Отображает компонент Button с аттрибутом `fullWidth`', () => {
    const { container } = render(<Button fullWidth />);
    const element = container.querySelector('button');

    expect(element).toHaveClass('button-fullwidth');
  });

  it('Устанавливает аттрибут `disabled` при наличии свойства', () => {
    const { container, rerender } = render(<Button disabled />);
    const element = container.querySelector('button');

    expect(element).toHaveAttribute('disabled');
    rerender(<Button disabled={false} />);
    expect(element).not.toHaveAttribute('disabled');
  });

  it('Отображает левую секцию кнопки', () => {
    const content = 'test-left-section';
    const { container } = render(<Button leftSection={content} />);
    const selector = '.button-section[data-position="left"]';
    const section = container.querySelector(selector);

    expect(section).toHaveTextContent(content);
  });

  it('Отображает правую секцию кнопки', () => {
    const content = 'test-right-section';
    const { container } = render(<Button rightSection={content} />);
    const selector = '.button-section[data-position="right"]';
    const section = container.querySelector(selector);

    expect(section).toHaveTextContent(content);
  });

  it('Обрабатывает событие нажатия', () => {
    const spy = vi.fn();

    render(<Button onClick={spy} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
