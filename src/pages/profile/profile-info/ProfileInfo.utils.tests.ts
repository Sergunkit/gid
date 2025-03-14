import { getLeaveDate } from './ProfileInfo.utils';

const now = new Intl.DateTimeFormat('ru-RU', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  timeZone: 'Europe/Moscow',
}).format(new Date());

describe('getLeaveDate', () => {
  it('Возвращает форматированную дату, если входная дата корректна', () => {
    const result = getLeaveDate('2023-10-15');

    expect(result).toBe('15.10.2023');
  });

  it('Возвращает дату по-умолчанию, если входная дата некорректна', () => {
    const result = getLeaveDate('invalid-date');

    expect(result).toBe(now);
  });

  it('Возвращает текущую дату, если входная дата некорректна', () => {
    const result = getLeaveDate(undefined);

    expect(result).toBe(now);
  });
});
