import type { User } from '@/auth';

import { getUserParams } from './Profile.utils';

const data: User = {
  id: 0,
  avatar: '',
  firstName: '',
  middleName: '',
  lastName: '',
  position: '',
  skills: [],
  role: 'user',
};

describe('getUserParams', () => {
  it('Возвращает `editable: true` для совпадающих идентификаторов', () => {
    const user = {
      ...data,
      id: 123,
    };
    const result = getUserParams('123', user);

    expect(result).toEqual({
      userId: 123,
      editable: true,
    });
  });

  it('Возвращает `editable: false` для несовпадающих идентификаторов', () => {
    const user = {
      ...data,
      id: 456,
    };
    const result = getUserParams('123', user);

    expect(result).toEqual({
      userId: 123,
      editable: false,
    });
  });

  it('Возвращает `editable: false` для невалидного идентификатора', () => {
    const user = {
      ...data,
      id: 123,
    };
    const result = getUserParams('invalid-id', user);

    expect(result).toEqual({
      userId: undefined,
      editable: false,
    });
  });

  it('Возвращает `editable: true` для пустого идентификатора', () => {
    const user = {
      ...data,
      id: 123,
    };
    const result = getUserParams(undefined, user);

    expect(result).toEqual({
      userId: 123,
      editable: true,
    });
  });

  it('Возвращает `editable: false` для незаданного пользователя', () => {
    const user = undefined;
    const result = getUserParams('123', user);

    expect(result).toEqual({
      userId: 123,
      editable: false,
    });
  });
});
