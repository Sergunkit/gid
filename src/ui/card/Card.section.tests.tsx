import { render, screen } from '@testing-library/react';

import { CardSection } from './Card.section';

describe('UI/Card/CardSection', () => {
  it('Отображает компонент CardSection', () => {
    const content = 'Содержимое карточки';

    render(<CardSection>{content}</CardSection>);
    const contentElement = screen.getByText(content);

    expect(contentElement).toBeInTheDocument();
  });

  it('Отображает заголовок карточки', () => {
    const title = 'Заголовок';
    const content = 'Содержимое карточки';

    render(<CardSection title={title}>{content}</CardSection>);
    const titleElement = screen.getByText(title);
    const contentElement = screen.getByText(content);

    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });

  it('Отображает заданный CSS-класс', () => {
    const content = 'Содержимое карточки';
    const rootClass = 'custom-root-css';
    const contentClass = 'custom-root-css';

    const { container } = render(
      <CardSection
        rootClass={rootClass}
        contentClass={contentClass}
      >
        {content}
      </CardSection>,
    );
    const containerElement = container.firstChild;
    const contentElement = screen.getByText(content);

    expect(containerElement).toBeInTheDocument();
    expect(containerElement).toHaveClass(rootClass);
    expect(contentElement).toHaveClass(contentClass);
  });
});
