import { act, renderHook } from '@testing-library/react';

import { useDisclosure } from '@/hooks';

describe('hooks/use-disclosure', () => {
  it('Устанавливает начальное состояние по-умолчанию', () => {
    const hook = renderHook(() => useDisclosure());

    expect(hook.result.current[0]).toBe(false);
  });

  it('Осуществляет переход в закрытое состояние', () => {
    const hook = renderHook(() => useDisclosure(true));

    expect(hook.result.current[0]).toBe(true);

    act(() => hook.result.current[1].close());
    expect(hook.result.current[0]).toBe(false);
  });

  it('Осуществляет переход в открытое состояние', () => {
    const hook = renderHook(() => useDisclosure(false));

    expect(hook.result.current[0]).toBe(false);

    act(() => hook.result.current[1].open());
    expect(hook.result.current[0]).toBe(true);
  });

  it('Осуществляет переключение состояния', () => {
    const hook = renderHook(() => useDisclosure(false));

    expect(hook.result.current[0]).toBe(false);

    act(() => hook.result.current[1].toggle());
    expect(hook.result.current[0]).toBe(true);

    act(() => hook.result.current[1].toggle());
    expect(hook.result.current[0]).toBe(false);
  });

  it('Вызывает функцию `onClose` при переходе в закрытое состояние', () => {
    const spy = vi.fn();
    const hook = renderHook(() => useDisclosure(true, { onClose: spy }));

    expect(spy).toHaveBeenCalledTimes(0);

    act(() => hook.result.current[1].close());
    expect(spy).toHaveBeenCalledTimes(1);

    act(() => hook.result.current[1].close());
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('Вызывает функцию `onOpen` при переходе в открытое состояние', () => {
    const spy = vi.fn();
    const hook = renderHook(() => useDisclosure(false, { onOpen: spy }));

    expect(spy).toHaveBeenCalledTimes(0);

    act(() => hook.result.current[1].open());
    expect(spy).toHaveBeenCalledTimes(1);

    act(() => hook.result.current[1].open());
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('Вызывает функции `onOpen` и `onClose` при переключении состояния', () => {
    const onClose = vi.fn();
    const onOpen = vi.fn();
    const callbacks = {
      onClose,
      onOpen,
    };
    const hook = renderHook(() => useDisclosure(false, callbacks));

    expect(onOpen).toHaveBeenCalledTimes(0);
    expect(onClose).toHaveBeenCalledTimes(0);

    act(() => hook.result.current[1].toggle());
    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(0);

    act(() => hook.result.current[1].toggle());
    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);

    act(() => hook.result.current[1].toggle());
    expect(onOpen).toHaveBeenCalledTimes(2);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
