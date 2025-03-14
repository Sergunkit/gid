import { fireEvent, render, screen } from '@testing-library/react';

import { Input } from '@/ui';

describe('UI/Input', () => {
  it('Отображает поле ввода', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();
  });

  it('Задает ширину поля', () => {
    render(<Input width={123} />);
    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('style', 'width: 123px;');
  });

  it('Вызывает onChange при изменении значения', () => {
    const onChange = vi.fn();

    render(<Input onChange={onChange} />);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'Тест' } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('Тест');
  });

  it('Отображает placeholder', () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByRole('textbox');

    expect(input).toHaveAttribute('placeholder', 'Enter text');
  });

  it('Отображает переданное значение', () => {
    render(<Input value="Тест" />);
    const input = screen.getByRole('textbox');

    expect(input).toHaveValue('Тест');
  });
});
