import { getZoneTime } from '@/utils';

describe('utils/getZoneTime', () => {
  it('Возвращает дату в часовом поясе', () => {
    const time = new Date().toLocaleTimeString('ru-RU', { timeStyle: 'short' });
    const result = getZoneTime('Europe/Moscow');

    expect(result).toBe(`Москва, ${time}`);
  });

  it('Возвращает пустую строку при некорректном параметре `zone`', () => {
    const result = getZoneTime();

    expect(result).toBe('');
  });
});
