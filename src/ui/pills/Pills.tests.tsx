import { fireEvent, render, screen } from '@testing-library/react';

import { Pills } from '@/ui';

describe('UI/Pills', () => {
  it('Отображает компонент', () => {
    const value = [
      {
        id: 0,
        name: 'Метка',
      },
    ];

    render(<Pills value={value} />);
    const pill = screen.getByText('Метка');

    expect(pill).toBeInTheDocument();
  });

  it('Отображает поле ввода новой метки, при наличии параметра `editable`', () => {
    const value = [
      {
        id: 0,
        name: 'Метка',
      },
    ];

    render(
      <Pills
        value={value}
        editable
      />,
    );
    const button = screen.getByPlaceholderText('Добавить');

    expect(button).toBeInTheDocument();
  });

  it('Вызывает функцию onChange при добавлении новой метки', () => {
    const spy = vi.fn();
    const value = [
      {
        id: 0,
        name: 'Метка',
      },
    ];

    render(
      <Pills
        value={value}
        editable
        onChange={spy}
      />,
    );

    const input = screen.getByPlaceholderText('Добавить');

    fireEvent.change(input, { target: { value: 'Новая метка' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith([
      {
        id: 0,
        name: 'Метка',
      },
      {
        id: 1,
        name: 'Новая метка',
      },
    ]);
  });

  it('Не вызывает функцию onChange при добавлении пустой метки', () => {
    const spy = vi.fn();
    const value = [
      {
        id: 0,
        name: 'Метка',
      },
    ];

    render(
      <Pills
        value={value}
        editable
        onChange={spy}
      />,
    );

    const input = screen.getByPlaceholderText('Добавить');

    fireEvent.change(input, { target: { value: '' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('Не вызывает функцию onChange при нажатии на неправильную клавишу', () => {
    const spy = vi.fn();
    const value = [
      {
        id: 0,
        name: 'Метка',
      },
    ];

    render(
      <Pills
        value={value}
        editable
        onChange={spy}
      />,
    );

    const input = screen.getByPlaceholderText('Добавить');

    fireEvent.change(input, { target: { value: '' } });
    fireEvent.keyDown(input, { key: 'Shift' });

    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('Вызывает функцию onChange при клике на кнопку удаления метки', () => {
    const spy = vi.fn();
    const value = [
      {
        id: 0,
        name: 'Метка',
      },
    ];

    render(
      <Pills
        value={value}
        editable
        onChange={spy}
      />,
    );

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith([]);
  });

  it('Отображает ограниченное количество меток при наличии параметра `maximum`', () => {
    const value = [
      {
        id: 0,
        name: 'Метка 1',
      },
      {
        id: 1,
        name: 'Метка 2',
      },
      {
        id: 2,
        name: 'Метка 3',
      },
      {
        id: 3,
        name: 'Метка 4',
      },
    ];

    render(
      <Pills
        value={value}
        maximum={2}
      />,
    );
    const pills = document.querySelectorAll('.pill');
    const count = screen.getByText('+2');

    expect(pills).toHaveLength(3);
    expect(count).toBeInTheDocument();
  });
});
