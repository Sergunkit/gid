import * as React from 'react';

type CardSectionProps = {
  rootClass?: string;
  contentClass?: string;
  title?: string;
  children: React.ReactNode;
};

/**
 * Компонент `CardSection` отображает секцию карточки.
 *
 * @param rootClass - CSS-класс корневого элемента секции.
 * @param contentClass - CSS-класс элемента содержимого секции.
 * @param title - Заголовок секции.
 * @param children - Содержимое секции.
 */
export function CardSection({
  rootClass,
  contentClass,
  title,
  children,
}: CardSectionProps) {
  return (
    <div className={`card-section${rootClass ? ` ${rootClass}` : ''}`}>
      {title && <div className="card-section-title">{title}</div>}
      <div
        className={`card-section-content${contentClass ? ` ${contentClass}` : ''}`}
      >
        {children}
      </div>
    </div>
  );
}
