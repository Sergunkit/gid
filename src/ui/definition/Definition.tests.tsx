import { render, screen } from '@testing-library/react';

import { Definition } from '@/ui';

describe('UI/Definition', () => {
  it('Отображает компонент Definition', () => {
    const label = 'Адрес офиса:';
    const value = 'Ленинградский пр-т., 72 к 4, Москва';

    render(
      <Definition
        label={label}
        value={value}
      />,
    );
    const labelElement = screen.getByText(label);
    const valueElement = screen.getByText(value);

    expect(labelElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
  });
});
