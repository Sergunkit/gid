/**
 * Возвращает инициалы пользователя, используя его имя и максимальную длину.
 *
 * @param name - Имя пользователя.
 * @param limit - Максимальная длина инициалов.
 */
export function getInitials(name: string, limit = 2) {
  const fragments = name.split(' ');

  if (fragments.length === 1) {
    return name.slice(0, limit).toUpperCase();
  }

  return fragments
    .map(word => word[0])
    .slice(0, limit)
    .join('')
    .toUpperCase();
}
