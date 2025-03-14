import * as React from 'react';

import type { TabItem } from './Tabs.types';

import './Tabs.styles.css';

type TabsProps = {
  defaultActive?: string;
  items: TabItem[];
  onChange?: (key: string) => void;
};

/**
 * Компонент `Tabs` отображает набор интерактивных элементов
 * в виде кнопок и соответствующего им содержимого.
 *
 * @param defaultActive - Идентификатор активного элемента.
 * @param items - Массив элементов вкладок.
 * @param onChange - Обработчик изменения активного элемента.
 */
export function Tabs({ defaultActive, items, onChange }: TabsProps) {
  const initialActive = defaultActive ?? items[0]?.id ?? '';
  const [active, setActive] = React.useState<string>(initialActive);

  function handleClick(id: string) {
    React.startTransition(() => {
      setActive(id);
      onChange?.(id);
    });
  }

  if (!items.length) {
    return null;
  }

  return (
    <div
      role="tablist"
      className="tabs"
    >
      <div className="tabs-list">
        {items.map(item => {
          const isActive = item.id === active;
          const isDisabled = item.disabled ?? false;

          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              className={`tabs-item${isActive ? ' active' : ''}${isDisabled ? ' disabled' : ''}`}
              aria-label={item.title}
              aria-selected={isActive ? 'true' : undefined}
              aria-hidden={isDisabled ? 'true' : undefined}
              disabled={isDisabled}
              onClick={() => handleClick(item.id)}
            >
              {item.title}
            </button>
          );
        })}
      </div>
      {items.map(item => {
        const isActive = item.id === active;

        return (
          <div
            key={`panel-${item.id}`}
            className={`tabs-panel${isActive ? ' active' : ''}`}
          >
            {item.children}
          </div>
        );
      })}
    </div>
  );
}
