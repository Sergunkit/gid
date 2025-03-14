import { getBadgeColor } from './User.utils';

describe('UI/User/utils/getBadgeColor', () => {
  it('Возвращает цвет для уровня L1', () => {
    const result = getBadgeColor('L1');

    expect(result).toBe('orange');
  });

  it('Возвращает цвет для уровня L2', () => {
    const result = getBadgeColor('L2');

    expect(result).toBe('green');
  });

  it('Возвращает цвет для уровня L3', () => {
    const result = getBadgeColor('L3');

    expect(result).toBe('purple');
  });

  it('Возвращает цвет для уровня L4', () => {
    const result = getBadgeColor('L4');

    expect(result).toBe('blue');
  });

  it('Возвращает цвет для произвольного уровня', () => {
    const result = getBadgeColor('Уровень');

    expect(result).toBe('blue');
  });

  it('Возвращает цвет при отсутствии значения', () => {
    const result = getBadgeColor();

    expect(result).toBe('blue');
  });
});
