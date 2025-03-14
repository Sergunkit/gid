import { render } from '@testing-library/react';

import { Leave } from '@/ui';

describe('UI/Leave', () => {
  it('Отображает компонент Leave', () => {
    const { container } = render(
      <Leave
        variant="vacation"
        period="2 – 15 декабря"
        reason="Отпуск"
      />,
    );

    expect(container).toBeInTheDocument();
  });
});
