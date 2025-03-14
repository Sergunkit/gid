/**
 * Возвращает ограниченное количество элементов
 * в древовидной структуре меню.
 *
 * @param value - Количество элементов.
 */
export function renderCount(value?: number) {
  if (!value || value < 0 || Number.isNaN(value)) {
    return 0;
  }

  if (value > 99) {
    return 99;
  }

  return value;
}
