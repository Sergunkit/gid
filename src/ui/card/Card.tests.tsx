import { render, screen } from '@testing-library/react';

import { Card } from '@/ui';

describe('UI/Card', () => {
  it('Отображает компонент Card', () => {
    const content = 'Содержимое карточки';

    render(<Card>{content}</Card>);
    const contentElement = screen.getByText(content);

    expect(contentElement).toBeInTheDocument();
  });

  it('Отображает заголовок карточки', () => {
    const title = 'Заголовок';
    const content = 'Содержимое карточки';

    render(<Card title={title}>{content}</Card>);
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
      <Card
        rootClass={rootClass}
        contentClass={contentClass}
      >
        {content}
      </Card>,
    );
    const containerElement = container.firstChild;
    const contentElement = screen.getByText(content);

    expect(containerElement).toBeInTheDocument();
    expect(containerElement).toHaveClass(rootClass);
    expect(contentElement).toHaveClass(contentClass);
  });
});
