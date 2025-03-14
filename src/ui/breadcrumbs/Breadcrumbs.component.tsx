import * as React from 'react';

import './Breadcrumbs.styles.css';

type BreadcrumbsItem = {
  title: string;
  href: string;
};

type BreadcrumbsProps = { items: BreadcrumbsItem[] };

const storageKey = 'breadcrumbs-opened';

/**
 * Компонент `Breadcrumbs` отображает дополнительную навигацию приложения,
 * с кнопкой скрытия промежуточных элементов.
 *
 * @param items - Элементы навигации.
 */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const initialOpen = window.localStorage.getItem(storageKey) === 'true';
  const [open, setOpen] = React.useState<boolean>(initialOpen);

  function toggleOpen() {
    setOpen(value => {
      window.localStorage.setItem(storageKey, `${!value}`);

      return !value;
    });
  }

  return (
    <div className={`breadcrumbs${open ? ' opened' : ''}`}>
      <span className="breadcrumbs-item">
        <button
          type="button"
          className="breadcrumbs-button"
          onClick={toggleOpen}
        >
          Вся структура
        </button>
      </span>
      {items.map((item, index) => (
        <a
          key={index}
          className="breadcrumbs-item breadcrumbs-link"
          href={item.href}
        >
          {item.title}
        </a>
      ))}
    </div>
  );
}
