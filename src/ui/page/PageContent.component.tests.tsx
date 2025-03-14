import { render, screen } from '@testing-library/react';

import { PageContent } from './PageContent.component';

describe('UI/Page/PageContent', () => {
  it('Отображает содержимое', () => {
    const data = <div>Тестовый текст</div>;

    render(<PageContent data={data} />);
    const content = screen.getByText('Тестовый текст');

    expect(content).toBeInTheDocument();
  });

  it('Отображает состояние загрузки содержимого', () => {
    const { container } = render(<PageContent isLoading />);

    expect(container.firstChild).toHaveClass('loader-page');
  });

  it('Отображает состояние отсутствия данных', () => {
    const { container } = render(<PageContent isEmpty />);

    expect(container.firstChild).toHaveClass('page-empty');
  });
});
