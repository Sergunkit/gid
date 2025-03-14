import * as React from 'react';

/**
 * Управляет логическим состоянием, предоставляя обработчики open,
 * close и toggle для использования в презентационных компонентах.
 *
 * @param initialState - Начальное состояние.
 * @param callbacks - Обработчики событий.
 */
export function useDisclosure(
  initialState = false,
  callbacks?: {
    onOpen?: () => void;
    onClose?: () => void;
  },
) {
  const { onOpen, onClose } = callbacks || {};
  const [opened, setOpened] = React.useState(initialState);

  const open = React.useCallback(() => {
    setOpened(isOpened => {
      if (!isOpened) {
        onOpen?.();

        return true;
      }

      return isOpened;
    });
  }, [onOpen]);

  const close = React.useCallback(() => {
    setOpened(isOpened => {
      if (isOpened) {
        onClose?.();

        return false;
      }

      return isOpened;
    });
  }, [onClose]);

  const toggle = React.useCallback(() => {
    opened ? close() : open();
  }, [close, open, opened]);

  return [
    opened,
    {
      open,
      close,
      toggle,
    },
  ] as const;
}
