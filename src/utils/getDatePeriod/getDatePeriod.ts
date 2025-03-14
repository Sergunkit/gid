/**
 * Возвращает фрагменты локализованной даты в виде массива.
 *
 * @param source - Дата в строковом формате.
 */
function getDateFragments(source: string): string[] {
  const date = new Date(source);
  const phrase = new Intl.DateTimeFormat('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Europe/Moscow',
  }).format(date);

  return phrase.split(' ');
}

/**
 * Возвращает строковое представление даты в формате "ДД.ММ.ГГГГ".
 *
 * @param source - Дата в строковом формате.
 */
function getShortDate(source: string): string {
  const date = new Date(source);

  return new Intl.DateTimeFormat('ru-RU', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: 'Europe/Moscow',
  }).format(date);
}

/**
 * Проверяет дату на корректность.
 *
 * @param source - Дата в строковом формате.
 */
function isValidDate(source: string): boolean {
  return !isNaN(new Date(source).getTime());
}

/**
 * Возвращает строковое представление периода времени
 * между двумя датами, рассчитанного в дневном исчислении.
 *
 * @param from - Дата начала периода.
 * @param to - Дата окончания периода.
 */
export function getDatePeriod(from: string, to: string): string {
  if (!isValidDate(from) || !isValidDate(to)) {
    return 'Неизвестный период';
  }

  const [fromDay, fromMonth, fromYear] = getDateFragments(from);
  const [toDay, toMonth, toYear] = getDateFragments(to);
  const shortFrom = getShortDate(from);
  const shortTo = getShortDate(to);
  const currentYear = `${new Date().getFullYear()}`;
  const sameYear = fromYear === toYear;
  const thisYear = sameYear && fromYear === currentYear;
  const sameMonth = sameYear && fromMonth === toMonth;
  const sameDay = sameMonth && fromDay === toDay;

  if (sameDay) {
    const fragments = [fromDay, fromMonth];

    if (currentYear !== fromYear) {
      fragments.push(fromYear);
    }

    return fragments.filter(Boolean).join(' ');
  }

  if (sameMonth) {
    const fragments = [fromDay, '-', toDay, toMonth];

    if (currentYear !== fromYear) {
      fragments.push(fromYear);
    }

    return fragments.filter(Boolean).join(' ');
  }

  if (sameYear && thisYear) {
    const fragments = [fromDay, fromMonth, '-', toDay, toMonth];

    return fragments.filter(Boolean).join(' ');
  }

  const fragments = [shortFrom, '-', shortTo];

  return fragments.filter(Boolean).join(' ');
}
