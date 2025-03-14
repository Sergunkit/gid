import * as React from 'react';

const DEFAULT_EVENTS = ['mousedown', 'touchstart'];

/**
 * Определяет события нажатия и касания за пределами DOM элемента,
 * и вызывает обработчик при возникновении таких событий.
 *
 * @param handler - Функция, вызываемая если событие произошло снаружи элемента.
 * @param events - Массив типов событий, которые необходимо отслеживать.
 * @param nodes - Массив узлов, блокирующих вызов обработчика.
 */
export function useClickOutside<T extends HTMLElement = HTMLElement>(
  handler: () => void,
  events?: string[] | null,
  nodes?: (HTMLElement | null)[],
): React.RefObject<T | null> {
  const ref = React.useRef<T | null>(null);

  React.useEffect(() => {
    const listener = (event: Event) => {
      const target = event.target as HTMLElement;

      if (Array.isArray(nodes)) {
        const shouldIgnore = target?.hasAttribute('data-ignore-outside-clicks');
        const shouldTrigger = nodes.every(node => {
          return !!node && !event.composedPath().includes(node);
        });

        if (shouldTrigger && !shouldIgnore) {
          handler();
        }
      } else if (!ref.current?.contains(target)) {
        handler();
      }
    };

    (events || DEFAULT_EVENTS).forEach(fn => {
      document.addEventListener(fn, listener);
    });

    return () => {
      (events || DEFAULT_EVENTS).forEach(fn => {
        document.removeEventListener(fn, listener);
      });
    };
  }, [ref, handler, nodes]);

  return ref;
}
