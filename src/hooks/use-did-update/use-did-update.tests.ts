import { renderHook } from '@testing-library/react';

import { useDidUpdate } from '@/hooks';

describe('@/hooks/use-did-update', () => {
  afterAll(() => {
    vi.clearAllMocks();
  });

  it('Вызывает функцию при смене зависимостей', () => {
    const spy = vi.fn();
    let dependency = '';
    const { rerender } = renderHook(() => useDidUpdate(spy, [dependency]));

    expect(spy).not.toHaveBeenCalled();

    dependency = 'foo';
    rerender();
    expect(spy).toHaveBeenCalled();
  });
});
