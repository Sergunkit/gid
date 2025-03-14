import * as React from 'react';

import { CardContent } from './Card.content';
import { CardHeader } from './Card.header';
import { CardSection } from './Card.section';

import './Card.styles.css';

type CardProps = {
  rootClass?: string;
  contentClass?: string;
  title?: React.ReactNode;
  children: React.ReactNode;
};

/**
 * Компонент `Card` отображает контентную область приложения
 * в виде карточки с заголовком и содержимым.
 *
 * @param rootClass - CSS-класс корневого элемента карточки.
 * @param contentClass - CSS-класс элемента содержимого карточки.
 * @param title - Заголовок карточки.
 * @param children - Содержимое карточки.
 */
export function Card({ rootClass, contentClass, title, children }: CardProps) {
  return (
    <section className={`card${rootClass ? ` ${rootClass}` : ''}`}>
      {title && <div className="card-title">{title}</div>}
      <div className={`card-content${contentClass ? ` ${contentClass}` : ''}`}>
        {children}
      </div>
    </section>
  );
}

Card.Content = CardContent;
Card.Header = CardHeader;
Card.Section = CardSection;
