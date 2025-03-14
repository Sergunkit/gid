import { act, renderHook } from '@testing-library/react';

import { useClipboard } from '@/hooks';

describe('hooks/useClipboard', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('Копирует текст в буфер обмена', async () => {
    const hook = renderHook(() => useClipboard(100));

    await act(async () => {
      await hook.result.current.copy('Тестовый текст');
    });

    expect(hook.result.current.copied).toBeTruthy();
    expect(hook.result.current.error).toBeNull();

    setTimeout(() => {
      expect(hook.result.current.copied).toBeFalsy();
      expect(hook.result.current.error).toBeNull();
    }, 120);
  });

  it('Возвращает ошибку, если текст пустой', async () => {
    const hook = renderHook(() => useClipboard());

    await act(async () => {
      await hook.result.current.copy('');
    });

    expect(hook.result.current.copied).toBeFalsy();
    expect(hook.result.current.error?.message).toContain(
      'Не удалось скопировать текст',
    );
  });

  it('Сбрасывает состояние компонента', async () => {
    const hook = renderHook(() => useClipboard());

    await act(async () => {
      await hook.result.current.copy('Тестовый текст');
    });

    expect(hook.result.current.copied).toBeTruthy();

    await act(async () => {
      hook.result.current.reset();
    });

    expect(hook.result.current.copied).toBeFalsy();
  });
});
