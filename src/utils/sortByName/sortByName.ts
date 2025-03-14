/**
 * Сортирует массив объектов по их свойству `name`
 * в алфавитном порядке.
 *
 * @param a - Первичный элемент массива.
 * @param b - Вторичный элемент массива.
 */
export function sortByName<T extends object>(a: T, b: T) {
  const aHasName = 'name' in a && typeof a.name === 'string';
  const bHasName = 'name' in b && typeof b.name === 'string';

  if (aHasName && bHasName) {
    return (a.name as string).localeCompare(b.name as string);
  }

  return 0;
}
