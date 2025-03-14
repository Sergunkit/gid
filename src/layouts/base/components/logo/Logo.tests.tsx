import { screen } from '@testing-library/react';

import { renderWrapped } from '@/testing';

import { Logo } from './Logo.component';

describe('UI/Logo', () => {
  it('Отображает компонент Logo', () => {
    renderWrapped(<Logo />);
    const logo = screen.getByRole('banner');

    expect(logo).toBeInTheDocument();
  });
});
