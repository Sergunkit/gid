import { renderCount } from './Tree.utils';

describe('UI/Tree/utils/renderCount', () => {
  it('Возвращает 0, если входной параметр не определен', () => {
    const result = renderCount(undefined);

    expect(result).toBe(0);
  });

  it('Возвращает 0, если значение входного параметра отрицательное', () => {
    const result = renderCount(-1);

    expect(result).toBe(0);
  });

  it('Возвращает 0, если значение входного параметра не является числом', () => {
    const result = renderCount(Number.NaN);

    expect(result).toBe(0);
  });

  it('Возвращает входной параметр, если его значение находится между 0 и 99', () => {
    const result = renderCount(50);

    expect(result).toBe(50);
  });

  it('Возвращает 99, если значение входного параметра больше 99', () => {
    const result = renderCount(150);

    expect(result).toBe(99);
  });
});
