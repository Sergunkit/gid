/**
 * Возвращает заданную в строковом формате дату
 * в формате 'dd.mm.yyyy' в часовом поясе МСК.
 * Если заданная дата некорректна, возвращает текущую дату.
 *
 * @param source - Дата в строковом формате.
 */
export function getLeaveDate(source: string | number = Date.now()): string {
  const date = isNaN(new Date(source).getTime())
    ? Date.now()
    : new Date(source);

  return new Intl.DateTimeFormat('ru-RU', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: 'Europe/Moscow',
  }).format(date);
}

/**
 * Возвращает заданную дату рождения пользователя
 * в формате 'dd MMMM' в часовом поясе МСК.
 * Если заданная дата некорректна, возвращает дату '01 января'.
 *
 * @param source - Дата в строковом формате.
 */
export function getBirthday(source?: string): string {
  const date = new Date(source ?? 0);

  return new Intl.DateTimeFormat('ru-RU', {
    month: 'long',
    day: 'numeric',
    timeZone: 'Europe/Moscow',
  }).format(date);
}
