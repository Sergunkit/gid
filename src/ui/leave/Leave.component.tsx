import { getLeaveImage } from './Leave.utils';

import './Leave.styles.css';

type LeaveProps = {
  variant: string;
  period: string;
  reason: string;
};

/**
 * Компонент `Leave` отображает запись отсутствия пользователя,
 * с периодом и причиной отсутствия.
 *
 * @param variant - Вариант отсутствия.
 * @param period - Период отсутствия.
 * @param reason - Причина отсутствия.
 */
export function Leave({ variant, period, reason }: LeaveProps) {
  const image = getLeaveImage(variant);

  return (
    <div className="leave">
      <div className="leave-icon">
        <img
          className="leave-image"
          src={image}
          alt={reason}
        />
      </div>
      <div className="leave-content">
        <div className="leave-period">{period}</div>
        <div className="leave-reason">{reason}</div>
      </div>
    </div>
  );
}
