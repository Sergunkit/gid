import * as React from 'react';

import type { Icon, IconProps } from '@tabler/icons-react';

import './PageEmpty.styles.css';

type PageEmptyProps = {
  icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
  text: string;
  children?: React.ReactNode;
};

/**
 * Компонент `PageEmpty` отображает сообщение об отсутствии данных.
 *
 * @param icon - Иконка сообщения.
 * @param text - Текст сообщения.
 * @param children - Дополнительное содержимое.
 */
export function PageEmpty({ icon: Icon, text, children }: PageEmptyProps) {
  return (
    <div className="page-empty">
      <Icon
        size={32}
        stroke={1.5}
      />
      <div className="page-empty-text">{text}</div>
      {children}
    </div>
  );
}
