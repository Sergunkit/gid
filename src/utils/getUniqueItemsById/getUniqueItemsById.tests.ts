import type { Skill } from '@/api';
import { getUniqueItemsById } from '@/utils';

describe('utils/getUniqueItemsById', () => {
  it('Возвращает список уникальных элементов', () => {
    const items = [
      {
        id: 1,
        name: 'React',
      },
      {
        id: 2,
        name: 'Vue',
      },
      {
        id: 2,
        name: 'Vue',
      },
      {
        id: 3,
        name: 'Angular',
      },
      {
        id: 4,
        name: 'Solid',
      },
      {
        id: 4,
        name: 'Solid',
      },
    ];
    const result = getUniqueItemsById<Skill>(items);

    expect(result).toEqual([
      {
        id: 1,
        name: 'React',
      },
      {
        id: 2,
        name: 'Vue',
      },
      {
        id: 3,
        name: 'Angular',
      },
      {
        id: 4,
        name: 'Solid',
      },
    ]);
  });

  it('Возвращает пустой список, если передан пустой список', () => {
    const items: Skill[] = [];
    const result = getUniqueItemsById<Skill>(items);

    expect(result).toEqual([]);
  });

  it('Возвращает список, если список не содержит дубликатов', () => {
    const items = [
      {
        id: 1,
        name: 'React',
      },
      {
        id: 2,
        name: 'Vue',
      },
      {
        id: 3,
        name: 'Angular',
      },
      {
        id: 4,
        name: 'Solid',
      },
    ];
    const result = getUniqueItemsById<Skill>(items);

    expect(result).toEqual(items);
  });
});
