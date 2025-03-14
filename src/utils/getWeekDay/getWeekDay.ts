/**
 * Возвращает день недели по указанному номеру.
 *
 * @param date - Номер дня недели.
 */
export function getWeekDay(date = 1) {
  let index = date;

  if (index < 1) {
    index = 1;
  }

  if (index > 7) {
    index = 7;
  }

  const days = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ];

  return days[index - 1];
}
