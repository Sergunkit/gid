import { getWeekDay } from '@/utils';

describe('utils/getWeekDay', () => {
  it('Возвращает первый день недели при отсутствии значения', () => {
    const result = getWeekDay();

    expect(result).toBe('Понедельник');
  });

  it('Возвращает `Вторник` при переданном значении 2', () => {
    const result = getWeekDay(2);

    expect(result).toBe('Вторник');
  });

  it('Возвращает `Воскресенье` при переданном значении 7', () => {
    const result = getWeekDay(7);

    expect(result).toBe('Воскресенье');
  });

  it('Возвращает `Понедельник` при переданном значении 1', () => {
    const result = getWeekDay(1);

    expect(result).toBe('Понедельник');
  });

  it('Возвращает `Понедельник` при значении -1', () => {
    const result = getWeekDay(-1);

    expect(result).toBe('Понедельник');
  });

  it('Возвращает `Воскресенье` при значении 8', () => {
    const result = getWeekDay(8);

    expect(result).toBe('Воскресенье');
  });
});
