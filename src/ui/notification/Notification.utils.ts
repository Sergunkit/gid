import { IconCake, IconCheck, IconNews } from '@tabler/icons-react';

import type { NotificationType } from './Notification.types';

/**
 * Возвращает компонент иконки уведомления
 * в зависимости от заданного типа.
 *
 * @param type - Тип уведомления.
 */
export function getNotificationIcon(type: NotificationType) {
  if (type === 'approval') {
    return IconCheck;
  }

  if (type === 'birthday') {
    return IconCake;
  }

  return IconNews;
}
