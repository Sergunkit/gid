import * as React from 'react';

import './Loader.styles.css';

type LoaderProps = {
  size?: number;
  page?: boolean;
};

/**
 * Компонент `Loader` отображает индикатор загрузки заданного размера
 * с возможностью индикации загрузки страницы.
 *
 * @param size - Размер индикатора.
 * @param page - Режим индикации загрузки страницы.
 */
export function Loader({ size = 36, page = false }: LoaderProps) {
  const loader = (
    <div
      role="status"
      className="loader"
      style={{ '--loader-size': `${size}px` } as React.CSSProperties}
    />
  );

  if (page) {
    return <div className="loader-page">{loader}</div>;
  }

  return loader;
}
