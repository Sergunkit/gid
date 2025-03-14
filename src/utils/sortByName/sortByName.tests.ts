import { sortByName } from '@/utils';

describe('utils/sortByName', () => {
  it('Сортирует элементы с разным названием по алфавиту', () => {
    const a: Record<string, string> = { name: 'Иван Иванов' };
    const b: Record<string, string> = { name: 'Анна Васильевна' };
    const sortedAsc = sortByName(a, b);
    const sortedDesc = sortByName(b, a);

    expect(sortedAsc).toBe(1);
    expect(sortedDesc).toBe(-1);
  });

  it('Сохраняет порядок для элементов с одинаковым названием', () => {
    const a: Record<string, string> = { name: 'Иван Иванов' };
    const b: Record<string, string> = { name: 'Иван Иванов' };
    const sortedAsc = sortByName(a, b);

    expect(sortedAsc).toBe(0);
  });

  it('Возвращает 0 для элементов без свойства `name`', () => {
    const a: Record<string, string> = { id: '0' };
    const b: Record<string, string> = { id: '1' };
    const sortedAsc = sortByName(a, b);

    expect(sortedAsc).toBe(0);
  });
});
