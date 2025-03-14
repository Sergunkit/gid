import { render, screen } from '@testing-library/react';

import { Badge } from '@/ui';

describe('UI/Badge', () => {
  it('Отображает компонент Badge', () => {
    render(<Badge title="Тестовый статус" />);
    const status = screen.getByRole('status');

    expect(status).toBeInTheDocument();
    expect(status).toHaveClass('badge badge-medium badge-green');
  });
});
