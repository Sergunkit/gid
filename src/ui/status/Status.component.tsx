import { StatusSize, StatusVariant } from './Status.types';

import './Status.styles.css';

type StatusProps = {
  title: string;
  size?: StatusSize;
  variant?: StatusVariant;
  onClick?: () => void;
};

/**
 * Компонент `Status` отображает статус различных объектов
 * с индикатором в виде точки и названием статуса.
 *
 * @param title - Название статуса.
 * @param size - Размер статуса.
 * @param variant - Вариант статуса.
 * @param onClick - Обработчик клика.
 */
export function Status({
  title,
  size = 'medium',
  variant = 'green',
  onClick,
}: StatusProps) {
  return (
    <div
      role="status"
      className={`status status-${size}`}
      onClick={onClick}
    >
      <div className={`status-icon status-${variant}`} />
      <div className="status-title">{title}</div>
    </div>
  );
}
