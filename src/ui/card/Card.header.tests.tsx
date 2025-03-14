import { render, screen, within } from '@testing-library/react';

import { renderWrapped } from '@/testing';

import { CardHeader } from './Card.header';

describe('UI/Card/CardHeader', () => {
  it('Отображает компонент CardHeader', () => {
    const title = 'Заголовок карточки';
    const { container } = render(<CardHeader title={title} />);
    const element = container.firstChild;

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('card-header card-header-md');
  });

  it('Отображает подзаголовок карточки', () => {
    const title = 'Заголовок карточки';
    const subtitle = 'Подзаголовок карточки';
    const additional = 'Дополнительная информация';
    const { container } = render(
      <CardHeader
        title={title}
        subtitle={subtitle}
        additional={additional}
      />,
    );
    const titleElement = within(container).getByText(title);
    const subtitleElement = within(container).getByText(subtitle);
    const additionalElement = within(container).getByText(additional);

    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
    expect(additionalElement).toBeInTheDocument();
  });

  it('Отображает ссылку в компоненте', () => {
    renderWrapped(
      <CardHeader
        title="Заголовок карточки"
        url="/page"
      />,
    );
    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/page');
  });
});
