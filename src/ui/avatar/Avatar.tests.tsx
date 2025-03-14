import { fireEvent, render, screen } from '@testing-library/react';

import { Avatar } from '@/ui';

describe('UI/Avatar', () => {
  it('Отображает компонент Avatar', () => {
    const { container } = render(<Avatar />);
    const initials = container.querySelector('.avatar-initials');

    expect(initials).toBeInTheDocument();
    expect(initials).toHaveTextContent('П');
  });

  it('Отображает аватар с типом `application`', () => {
    const { container } = render(
      <Avatar
        type="application"
        name="Иван Иванов"
      />,
    );
    const element = container.querySelector('.avatar-application');

    expect(element).toBeInTheDocument();
  });

  it('Отображает аватар с параметром `editable`', () => {
    const { container } = render(<Avatar editable />);
    const input = container.querySelector('.avatar-edit');

    expect(input).toBeInTheDocument();
  });

  it('Отображает аватар с параметром `loading`', () => {
    const { rerender } = render(<Avatar />);

    rerender(<Avatar loading />);
    const loader = screen.getByRole('status');

    expect(loader).toBeInTheDocument();
  });

  it('Отображает изображение аватара', () => {
    render(<Avatar src="/image.jpg" />);
    const image = screen.getByRole('img');

    expect(image).toBeInTheDocument();
    expect(image).toHaveClass('avatar-image');
    expect(image).toHaveAttribute('src', '/image.jpg');
  });

  it('Обрабатывает успешную загрузку изображения', () => {
    const { container } = render(<Avatar src="/image.jpg" />);
    const image = screen.getByRole('img');
    const loader = screen.getByRole('status');

    expect(loader).toBeInTheDocument();

    fireEvent.load(image);

    const initials = container.querySelector('.avatar-initials');

    expect(initials).not.toBeInTheDocument();
    expect(loader).not.toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/image.jpg');
  });

  it('Обрабатывает ошибку при загрузке изображения', () => {
    const { container } = render(<Avatar src="/image.jpg" />);
    const image = screen.getByRole('img');
    const loader = screen.getByRole('status');

    expect(loader).toBeInTheDocument();

    fireEvent.error(image);

    const initials = container.querySelector('.avatar-initials');

    expect(loader).not.toBeInTheDocument();
    expect(image).not.toBeInTheDocument();
    expect(initials).toBeInTheDocument();
    expect(initials).toHaveTextContent('П');
  });
});
