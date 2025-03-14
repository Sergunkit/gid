import { screen } from '@testing-library/react';

import { Applications } from '@/pages';
import { renderWrapped } from '@/testing';

describe('Applications', () => {
  it('Отображает содержимое страницы', () => {
    renderWrapped(<Applications />);
    const title = screen.getByText('Заявки');
    const placeholder = 'Содержимое страницы «Заявки»';
    const content = screen.getByText(placeholder);

    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
});
