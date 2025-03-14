import { render, screen } from '@testing-library/react';

import { CardContent } from './Card.content';

describe('UI/Card/CardContent', () => {
  it('Отображает компонент CardContent', () => {
    const content = 'Содержимое карточки';

    render(<CardContent>{content}</CardContent>);
    const element = screen.getByText(content);

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('card-content');
  });
});
