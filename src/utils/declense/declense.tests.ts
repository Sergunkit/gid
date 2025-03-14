import { declense } from '@/utils';

const words = ['яблоко', 'яблока', 'яблок'];

describe('utils/declense', () => {
  it('Возвращает склонение для числа 0', () => {
    const result = declense(words, 0);

    expect(result).toBe(words[2]);
  });

  it('Возвращает склонение для числа 1', () => {
    const result = declense(words, 1);

    expect(result).toBe(words[0]);
  });

  it('Возвращает склонение для числа 3', () => {
    const result = declense(words, 3);

    expect(result).toBe(words[1]);
  });

  it('Возвращает склонение для числа 8', () => {
    const result = declense(words, 8);

    expect(result).toBe(words[2]);
  });

  it('Возвращает склонение для числа 323', () => {
    const result = declense(words, 323);

    expect(result).toBe(words[1]);
  });

  it('Возвращает склонение для числа 1001', () => {
    const result = declense(words, 1001);

    expect(result).toBe(words[0]);
  });

  it('Возвращает `null`, если массив и число не переданы', () => {
    const result = declense();

    expect(result).toBeNull();
  });

  it('Возвращает `null`, если в массиве слов недостаточно элементов', () => {
    const result = declense(['яблоко', 'яблока'], 2);

    expect(result).toBeNull();
  });

  it('Возвращает `null`, если переданное число не является конечным целым', () => {
    const result = declense(words, NaN);

    expect(result).toBeNull();
  });
});
