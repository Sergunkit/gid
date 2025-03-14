import * as React from 'react';

import { Link } from 'react-router';

import { sortByName } from '../../indexUtils.ts';

import type { TreeEntry } from './Tree.types.ts';
import { renderCount } from './Tree.utils.ts';

type TreeItemProps = TreeEntry & {
  current: string;
  url: string;
  showCount?: boolean;
};

/**
 * Компонент `TreeItem` отображает элемент древовидной структуры меню.
 *
 * @param id - Идентификатор элемента.
 * @param current - Идентификатор текущего активного элемента.
 * @param name - Название элемента.
 * @param level - Уровень вложенности элемента в структуре.
 * @param count - Количество дочерних элементов.
 * @param url - Адрес ссылки элемента.
 * @param showCount - Флаг отображения количества дочерних элементов.
 * @param children - Дочерние элементы.
 */
export function TreeItem({
  id,
  current,
  name,
  level,
  count,
  url,
  showCount = false,
  children,
}: TreeItemProps) {
  const isActive = current === id.toString();
  const hasChildren = Array.isArray(children) && children.length > 0;
  const activeClass = isActive ? ' active' : '';
  const childClass = hasChildren ? '' : ' empty';
  const counter = renderCount(count);
  const hasCount = showCount && counter > 0;

  return (
    <div
      className={`tree-item${activeClass}${childClass}`}
      style={{ '--ps-tree-item-level': level } as React.CSSProperties}
    >
      <Link
        className="tree-item-link"
        to={`${url}/${id}`}
      >
        <span className="tree-item-count">
          {hasCount && <span className="tree-item-count-value">{counter}</span>}
        </span>
        <span className="tree-item-name">{name}</span>
      </Link>
      <span className="tree-item-children">
        {children?.sort(sortByName).map(child => (
          <TreeItem
            key={child.id}
            children={child.children}
            name={child.name}
            level={child.level}
            priority={child.priority}
            id={child.id}
            count={child.count}
            current={current}
            url={url}
            showCount={showCount}
          />
        ))}
      </span>
    </div>
  );
}
