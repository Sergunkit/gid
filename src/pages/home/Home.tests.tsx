import { screen } from '@testing-library/react';

import { Home } from '@/pages';
import { renderWrapped } from '@/testing';

describe('Home', () => {
  it('Отображает содержимое страницы', () => {
    renderWrapped(<Home />);
    const title = screen.getByText('Главная');
    const placeholder = 'Содержимое страницы «Главная»';
    const content = screen.getByText(placeholder);

    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
});
