import { getFullName } from './getFullName';

describe('utils/getFullName', () => {
  it('Возвращает полное имя, если firstName и lastName присутствуют', () => {
    const source = {
      firstName: 'Иван',
      lastName: 'Петров',
    };
    const result = getFullName(source);

    expect(result).toBe('Иван Петров');
  });

  it('Возвращает "Пользователь", если firstName или lastName отсутствуют', () => {
    const source = {
      firstName: 'Иван',
      lastName: undefined as unknown as string,
    };
    const result = getFullName(source);

    expect(result).toBe('Пользователь');
  });
});
