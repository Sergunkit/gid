import { BadgeSize, BadgeVariant } from './Badge.types';

import './Badge.styles.css';

type BadgeProps = {
  title: string;
  size?: BadgeSize;
  variant?: BadgeVariant;
};

/**
 * Компонент `Badge` отображает статус различных объектов
 * в виде статичной бирки с названием статуса.
 *
 * @param title - Название статуса.
 * @param size - Размер статуса.
 * @param variant - Вариант статуса.
 */
export function Badge({
  title,
  size = 'medium',
  variant = 'green',
}: BadgeProps) {
  return (
    <div
      role="status"
      className={`badge badge-${size} badge-${variant}`}
    >
      {title}
    </div>
  );
}
