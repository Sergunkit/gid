import { formatPhone } from '@/utils';

describe('@/utils/formatPhone', () => {
  it('Форматирует городской телефон без +', () => {
    const result = formatPhone('74722112233');

    expect(result).toBe('+7 (472) 211-22-33');
  });

  it('Форматирует городской телефон с +', () => {
    const result = formatPhone('+74722112233');

    expect(result).toBe('+7 (472) 211-22-33');
  });

  it('Форматирует мобильный телефон', () => {
    const result = formatPhone('89201112233');

    expect(result).toBe('+7 (920) 111-22-33');
  });

  it('Форматирует телефон в междугороднем формате', () => {
    const result = formatPhone('19991112233');

    expect(result).toBe('+1 (999) 111-22-33');
  });

  it('Оставляет без изменений телефон с меньшим количеством знаков', () => {
    const result = formatPhone('112233');

    expect(result).toBe('112233');
  });

  it('Возвращает пустую строку, если входной параметр не задан', () => {
    const result = formatPhone();

    expect(result).toBe('');
  });
});
