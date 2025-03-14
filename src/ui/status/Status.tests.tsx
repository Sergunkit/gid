import { render, screen } from '@testing-library/react';

import { Status } from '@/ui';

describe('UI/Status', () => {
  it('Отображает компонент Status', () => {
    render(<Status title="Тестовый статус" />);
    const status = screen.getByRole('status');
    const icon = status.firstChild;

    expect(status).toBeInTheDocument();
    expect(status).toHaveClass('status status-medium');
    expect(icon).toHaveClass('status-icon status-green');
  });
});
