import { MenuItem } from './Menu.item.tsx';

import type { MenuEntry } from './Menu.types.ts';

type MenuProps = {
  items: MenuEntry[];
  current: string;
};

/**
 * Компонент `Menu` отображает список элементов навигационного меню.
 * Каждый элемент меню содержит иконку и название. Активный класс элемента
 * назначается при соответствии URL элемента параметру `current`.
 *
 * @param items - Массив элементов меню.
 * @param current - Текущий URL.
 */
export function Menu({ items, current }: MenuProps) {
  return items.map(({ url, icon, title }, index) => {
    return (
      <MenuItem
        key={url}
        title={title}
        icon={icon}
        current={current}
        index={index}
        url={url}
      />
    );
  });
}
