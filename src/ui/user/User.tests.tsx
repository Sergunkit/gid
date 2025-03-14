import { screen } from '@testing-library/react';

import { renderWrapped } from '@/testing';
import { User } from '@/ui';

import avatar from '@/assets/avatar.svg';

const name = 'Иван Петров';
const position = 'Разработчик';

describe('UI/User', () => {
  it('Отображает компонент с именем и должностью', () => {
    renderWrapped(
      <User
        title={name}
        description={position}
      />,
    );
    const nameElement = screen.getByText(name);
    const positionElement = screen.getByText(position);

    expect(nameElement).toBeInTheDocument();
    expect(positionElement).toBeInTheDocument();
  });

  it('Отображает компонент с изображением аватара', () => {
    renderWrapped(
      <User
        title={name}
        description={position}
        avatar={avatar}
      />,
    );
    const avatarElement = screen.getByAltText(name);

    expect(avatarElement).toBeInTheDocument();
  });

  it('Отображает компонент с навыками и уровнем пользователя', () => {
    const { container } = renderWrapped(
      <User
        title={name}
        description={position}
        skills={16}
        level="Высокий"
      />,
    );
    const content = container.querySelector('.user-content');
    const badge = container.querySelector('.badge');
    const skills = container.querySelector('.user-skills');

    expect(content).toBeInTheDocument();
    expect(content).toHaveClass('hoverable');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveTextContent('Высокий');
    expect(skills).toBeInTheDocument();
    expect(skills).toHaveTextContent('16 навыков');
  });

  it('Отображает компонент с типом `application`', () => {
    const { container } = renderWrapped(
      <User
        title={name}
        description={position}
        type="application"
      />,
    );
    const icon = container.querySelector('.avatar-application');

    expect(icon).toBeInTheDocument();
  });

  it('Отображает компонент в состоянии `editable`', () => {
    const { container } = renderWrapped(
      <User
        title={name}
        description={position}
        editable
      />,
    );
    const actions = container.querySelector('.user-actions');

    expect(actions).toBeInTheDocument();
  });

  it('Добавляет класс `clickable` к компоненту с параметром `onClick`', () => {
    const { container } = renderWrapped(
      <User
        title={name}
        description={position}
        onClick={() => {}}
      />,
    );
    const content = container.querySelector('.user-content');

    expect(content).toHaveClass('clickable');
  });
});
