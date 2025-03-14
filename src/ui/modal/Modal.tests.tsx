import { fireEvent, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { Modal } from '@/ui';

const contentText = 'Содержимое модального окна';

describe('UI/Modal', () => {
  it('Отображает компонент Modal', () => {
    render(<Modal>{contentText}</Modal>);
    const content = screen.getByText(contentText);

    expect(content).toBeInTheDocument();
  });

  it('Отображает начальное состояние окна', () => {
    render(<Modal opened>{contentText}</Modal>);
    const content = screen.getByText(contentText);
    const modal = document.querySelector('.modal');

    expect(content).toBeInTheDocument();
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveClass('opened');
  });

  it('Отображает заголовок модального окна', () => {
    const titleText = 'Заголовок модального окна';

    render(<Modal title={titleText}>{contentText}</Modal>);
    const title = screen.getByText(titleText);
    const content = screen.getByText(contentText);

    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });

  it('Вызывает обработчик `onClose` при нажатии на клавишу ESC', async () => {
    const spy = vi.fn();

    render(
      <Modal
        opened
        onClose={spy}
      >
        {contentText}
      </Modal>,
    );
    const dialog = screen.getByRole('dialog');

    await userEvent.type(dialog, '{Escape}');

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('Не вызывает обработчик `onClose`, если окно не открыто', async () => {
    const spy = vi.fn();

    render(
      <Modal
        opened={false}
        onClose={spy}
      >
        {contentText}
      </Modal>,
    );
    const dialog = screen.getByRole('dialog');

    await userEvent.type(dialog, '{Escape}');

    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('Вызывает обработчик `onOpened` при завершении открытия окна', async () => {
    const openedSpy = vi.fn();
    const closedSpy = vi.fn();

    render(
      <Modal
        opened={false}
        onOpened={openedSpy}
        onClosed={closedSpy}
      >
        {contentText}
      </Modal>,
    );
    const element = screen.getByRole('dialog');

    fireEvent.transitionEnd(element);

    expect(closedSpy).toHaveBeenCalled();
    expect(closedSpy).toHaveBeenCalledTimes(1);
    expect(openedSpy).toHaveBeenCalledTimes(0);
  });

  it('Вызывает обработчик `onClosed` при завершении закрытия окна', async () => {
    const openedSpy = vi.fn();
    const closedSpy = vi.fn();

    render(
      <Modal
        opened={true}
        onOpened={openedSpy}
        onClosed={closedSpy}
      >
        {contentText}
      </Modal>,
    );
    const element = screen.getByRole('dialog');

    fireEvent.transitionEnd(element);

    expect(openedSpy).toHaveBeenCalled();
    expect(openedSpy).toHaveBeenCalledTimes(1);
    expect(closedSpy).toHaveBeenCalledTimes(0);
  });
});
