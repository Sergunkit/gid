import * as React from 'react';

export function useInViewport<T extends HTMLElement>() {
  const observer = React.useRef<IntersectionObserver | null>(null);
  const [inViewport, setInViewport] = React.useState(false);

  const ref = React.useCallback((node: T | null) => {
    if (typeof IntersectionObserver !== 'undefined') {
      if (node && !observer.current) {
        observer.current = new IntersectionObserver(([entry]) => {
          setInViewport(entry.isIntersecting);
        });
      } else {
        observer.current?.disconnect();
      }

      if (node) {
        observer.current?.observe(node);
      } else {
        setInViewport(false);
      }
    }
  }, []);

  return {
    ref,
    inViewport,
  };
}
