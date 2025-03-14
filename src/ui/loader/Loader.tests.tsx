import { render } from '@testing-library/react';

import { Loader } from '@/ui';

describe('UI/Loader', () => {
  it('Отображает компонент Loader', () => {
    const { container } = render(<Loader />);
    const element = container.querySelector('.loader');

    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle({ '--loader-size': '36px' });
  });

  it('Отображает компонент Loader с заданным размером', () => {
    const { container } = render(<Loader size={50} />);
    const element = container.querySelector('.loader');

    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle({ '--loader-size': '50px' });
  });

  it('Отображает компонент Loader с возможностью индикации загрузки страницы', () => {
    const { container } = render(<Loader page />);
    const page = container.querySelector('.loader-page');
    const loader = container.querySelector('.loader');

    expect(page).toBeInTheDocument();
    expect(loader).toBeInTheDocument();
  });
});
