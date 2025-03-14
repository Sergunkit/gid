import { getInitials } from './Avatar.utils';

describe('UI/Avatar/utils/getInitials', () => {
  it('Возвращает инициалы имени', () => {
    const result = getInitials('Иван');

    expect(result).toBe('ИВ');
  });

  it('Возвращает инициалы имени и фамилии', () => {
    const result = getInitials('Иван Петров');

    expect(result).toBe('ИП');
  });

  it('Возвращает инициалы имени и фамилии с ограничением длины', () => {
    const result = getInitials('Иван Петрович Иванов', 1);

    expect(result).toBe('И');
  });
});
