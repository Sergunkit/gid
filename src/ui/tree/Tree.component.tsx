import { TreeItem } from './Tree.item.tsx';
import type { TreeEntry } from './Tree.types.ts';

import './Tree.styles.css';

export type TreeProps = {
  items: TreeEntry[];
  current: string;
  url: string;
  showCount?: boolean;
};

/**
 * Компонент `Tree` отображает список элементов навигационного меню
 * в виде древовидной структуры.
 *
 * @param items - Массив элементов структуры.
 * @param current - Идентификатор активного элемента.
 * @param url - Корневой URL раздела.
 * @param showCount - Флаг отображения количества для элемента.
 */
export function Tree({ items, current, url, showCount = false }: TreeProps) {
  return (
    <div>
      {items.map(item => (
        <TreeItem
          key={item.id}
          children={item.children}
          current={current}
          url={url}
          id={item.id}
          name={item.name}
          level={item.level}
          priority={item.priority}
          count={item.count}
          showCount={showCount}
        />
      ))}
    </div>
  );
}
