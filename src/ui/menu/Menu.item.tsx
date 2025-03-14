import * as React from 'react';

import { Link } from 'react-router';
import type { Icon, IconProps } from '@tabler/icons-react';

import { isActiveKey } from './Menu.utils';

import './Menu.item.styles.css';

type MenuItemProps = {
  icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
  title: string;
  current?: string;
  index?: number;
  url?: string;
  onClick?: () => void;
};

/**
 * Компонент `MenuItem` отображает элемент структуры меню.
 */
export function MenuItem({
  title,
  icon: Icon,
  current,
  index,
  url = '',
  onClick,
}: MenuItemProps) {
  const isLink = current && index !== undefined;
  const isActive = isLink ? isActiveKey(url, current, index) : false;
  const content = (
    <>
      <span className="menu-item-icon">
        <Icon
          size={16}
          stroke={1.5}
        />
      </span>
      <span className="menu-item-title">{title}</span>
    </>
  );

  if (onClick) {
    return (
      <button
        className="menu-item"
        onClick={onClick}
      >
        {content}
      </button>
    );
  }

  return (
    <Link
      key={url}
      className={`menu-item${isActive ? ' active' : ''}`}
      to={url}
      viewTransition
    >
      {content}
    </Link>
  );
}
