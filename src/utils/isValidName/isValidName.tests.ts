import { isValidName } from '@/utils';

describe('@/utils/isValidName', () => {
  it('Возвращает true, если переданное значение содержит только буквы', () => {
    const result = isValidName('ИванПетровJohnson');

    expect(result).toBeTruthy();
  });

  it('Возвращает true, если переданное значение содержит пробел', () => {
    const result = isValidName('Иван Васильевич');

    expect(result).toBeTruthy();
  });

  it('Возвращает true, если переданное значение содержит знаки препинания', () => {
    const result = isValidName("Иван П., John-Done'ов сын");

    expect(result).toBeTruthy();
  });

  it('Возвращает false, если переданное значение содержит цифры', () => {
    const result = isValidName('Иван123');

    expect(result).toBeFalsy();
  });

  it('Возвращает false, если переданное значение содержит спецсимволы', () => {
    const result = isValidName('Иван П%@#&ович');

    expect(result).toBeFalsy();
  });

  it('Возвращает false, если переданное значение не является строкой', () => {
    const result = isValidName(123 as unknown as string);

    expect(result).toBeFalsy();
  });
});
