/**
 * Проверяет соответствие набора символов переданного значения
 * валидному формату имени (только буквы, пробелы и знаки препинания)
 *
 * @param source - Исходное значение.
 */
export function isValidName(source: unknown) {
  if (typeof source !== 'string') {
    return false;
  }

  const regex = /[^a-zA-Zа-яА-Я\s\-.',()]/;

  return !regex.test(source);
}
