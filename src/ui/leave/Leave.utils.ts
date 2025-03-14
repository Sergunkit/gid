import business from './assets/business.svg';
import sickness from './assets/sickness.svg';
import vacation from './assets/vacation.svg';

/**
 * Возвращает URL изображения в зависимости от типа отсутствия.
 *
 * @param type - Тип отсутствия.
 */
export function getLeaveImage(type: string) {
  if (type === 'vacation') {
    return vacation;
  }

  if (type === 'sickness') {
    return sickness;
  }

  return business;
}
