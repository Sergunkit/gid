import * as React from 'react';

export function useDidUpdate(
  fn: React.EffectCallback,
  dependencies?: React.DependencyList,
) {
  const mounted = React.useRef(false);

  React.useEffect(
    () => () => {
      mounted.current = false;
    },
    [],
  );

  React.useEffect(() => {
    if (mounted.current) {
      return fn();
    }

    mounted.current = true;

    return undefined;
  }, dependencies);
}
