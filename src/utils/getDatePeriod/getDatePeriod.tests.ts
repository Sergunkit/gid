import { getDatePeriod } from '@/utils';

const year = new Date().getFullYear();

describe('utils/getDatePeriod', () => {
  it('Возвращает период для двух одинаковых дат', () => {
    const result = getDatePeriod(`${year}-01-01`, `${year}-01-01`);

    expect(result).toEqual('1 января');
  });

  it('Возвращает период для двух одинаковых дат в будущем году', () => {
    const result = getDatePeriod(`${year + 1}-01-01`, `${year + 1}-01-01`);

    expect(result).toEqual(`1 января ${year + 1}`);
  });

  it('Возвращает период для двух дат в одном месяце', () => {
    const result = getDatePeriod(`${year}-01-01`, `${year}-01-20`);

    expect(result).toEqual('1 - 20 января');
  });

  it('Возвращает период для двух дат в одном месяце следующего года', () => {
    const result = getDatePeriod(`${year + 1}-01-01`, `${year + 1}-01-20`);

    expect(result).toEqual(`1 - 20 января ${year + 1}`);
  });

  it('Возвращает период для двух дат в одном году', () => {
    const result = getDatePeriod(`${year}-01-01`, `${year}-12-31`);

    expect(result).toEqual('1 января - 31 декабря');
  });

  it('Возвращает период для двух дат в следующем году', () => {
    const result = getDatePeriod(`${year + 1}-01-01`, `${year + 1}-12-31`);

    expect(result).toEqual(`01.01.${year + 1} - 31.12.${year + 1}`);
  });

  it('Возвращает период для двух дат в разных годах', () => {
    const result = getDatePeriod(`${year}-12-28`, `${year + 1}-01-08`);

    expect(result).toEqual(`28.12.${year} - 08.01.${year + 1}`);
  });

  it('Возвращает "Неизвестный период", если хотя бы одна из дат невалидна', () => {
    const result = getDatePeriod(`${year}-12-28`, 'invalid');

    expect(result).toEqual('Неизвестный период');
  });
});
