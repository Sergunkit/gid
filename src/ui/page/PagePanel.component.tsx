import * as React from 'react';

import './PagePanel.styles.css';

type PagePanelProps = {
  gap?: number;
  children: React.ReactNode;
};

/**
 * Компонент `PagePanel` отображает дополнительную панель страницы.
 *
 * @param gap - Расстояние между элементами панели.
 * @param children - Содержимое панели.
 */
export function PagePanel({ gap = 12, children }: PagePanelProps) {
  return (
    <div
      className="page-panel"
      style={{ gap: `${gap}px` }}
    >
      {children}
    </div>
  );
}
