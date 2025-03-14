import { isActiveLink } from './Link.utils';

describe('isActiveLink', () => {
  it('Возвращает false, если параметры url и location пусты', () => {
    const result = isActiveLink('', '');

    expect(result).toBeFalsy();
  });

  it('Возвращает false, если параметр location пуст', () => {
    const result = isActiveLink('/', '');

    expect(result).toBeFalsy();
  });

  it('Возвращает true, если параметры url и location равны корневой ссылке', () => {
    const result = isActiveLink('/', '/');

    expect(result).toBeTruthy();
  });

  it('Возвращает true, если параметр url равен корневой ссылке и не равен location', () => {
    const result = isActiveLink('/', '/users');

    expect(result).toBeFalsy();
  });

  it('Возвращает true, если параметр location равен корневой ссылке и не равен url', () => {
    const result = isActiveLink('/users', '/');

    expect(result).toBeFalsy();
  });

  it('Возвращает true, если параметры url и location равны', () => {
    const result = isActiveLink('/users', '/users');

    expect(result).toBeTruthy();
  });

  it('Возвращает true, если параметр url начинается с location', () => {
    const result = isActiveLink('/users/tree', '/users');

    expect(result).toBeTruthy();
  });

  it('Возвращает false, если параметр url не начинается с location', () => {
    const result = isActiveLink('/users', '/actions');

    expect(result).toBeFalsy();
  });
});
