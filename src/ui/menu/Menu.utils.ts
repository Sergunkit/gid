/**
 * Проверяет, соответствует ли текущий URL заданному ключу
 * или начинается ли текущий URL с заданного ключа.
 *
 * @param key - Проверяемый ключ.
 * @param current - Текущий URL.
 * @param index - Индекс ключа в меню.
 */
export function isActiveKey(
  key: string,
  current: string,
  index: number,
): boolean {
  if (index === 0) {
    return current === key;
  }

  return current.startsWith(key);
}
