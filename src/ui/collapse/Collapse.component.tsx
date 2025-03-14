import * as React from 'react';

import { flushSync } from 'react-dom';

import { useDidUpdate } from '../../indexHooks.ts';

type CollapseProps = {
  in?: boolean;
  children: React.ReactNode;
};

export function getElementHeight(
  el:
    | React.RefObject<HTMLElement | null>
    | { current?: { scrollHeight: number } },
) {
  return el?.current ? el.current.scrollHeight : 'auto';
}

export function Collapse({ in: opened, children }: CollapseProps) {
  const el = React.useRef<HTMLElement | null>(null);
  const collapsedHeight = 0;
  const collapsedStyles = {
    display: 'none',
    height: 0,
    overflow: 'hidden',
  };
  const [styles, setStylesRaw] = React.useState<React.CSSProperties>(
    opened ? {} : collapsedStyles,
  );
  const setStyles = (newStyles: {} | ((oldStyles: {}) => {})): void => {
    flushSync(() => setStylesRaw(newStyles));
  };

  const mergeStyles = (newStyles: {}): void => {
    setStyles(oldStyles => ({
      ...oldStyles,
      ...newStyles,
    }));
  };
  const raf = window.requestAnimationFrame;

  useDidUpdate(() => {
    if (typeof raf === 'function') {
      if (opened) {
        raf(() => {
          mergeStyles({
            willChange: 'height',
            display: 'block',
            overflow: 'hidden',
          });
          raf(() => {
            const height = getElementHeight(el);

            mergeStyles({
              transition: 'height 200ms ease, opacity 200ms ease',
              height,
            });
          });
        });
      } else {
        raf(() => {
          const height = getElementHeight(el);

          mergeStyles({
            transition: 'height 200ms ease, opacity 200ms ease',
            willChange: 'height',
            height,
          });
          raf(() => {
            mergeStyles({
              height: collapsedHeight,
              overflow: 'hidden',
            });
          });
        });
      }
    }
  }, [opened]);

  return (
    <span
      ref={el}
      className="collapse"
      style={{
        opacity: opened ? 1 : 0,
        ...styles,
      }}
    >
      {children}
    </span>
  );
}
