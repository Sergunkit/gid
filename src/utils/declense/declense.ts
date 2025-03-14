/**
 * Возвращает склонение для заданного числа,
 * выбирая соответствующее слово из массива.
 *
 * @param words - Массив слов для склонения.
 * @param n - Заданное число.
 */
export function declense(words?: string[], n?: number): string | null {
  let index: number;
  const notEnoughWords = !words?.length || words?.length < 3;

  if (typeof n !== 'number' || !Number.isFinite(n) || notEnoughWords) {
    return null;
  }

  if (n % 10 === 1 && n % 100 != 11) {
    index = 0;
  } else if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
    index = 1;
  } else {
    index = 2;
  }

  return words[index];
}
