import { isActiveKey } from './Menu.utils';

describe('UI/Menu/utils/isActiveKey', () => {
  it('возвращает true если key равен "/" и соответствует current', () => {
    const result = isActiveKey('/', '/', 0);

    expect(result).toBe(true);
  });

  it('возвращает false если key равен "/" и не соответствует current', () => {
    const result = isActiveKey('/', '/path', 0);

    expect(result).toBe(false);
  });

  it('возвращает true если key не равен "/" and current начинается с key', () => {
    const result = isActiveKey('/path', '/path/subpath', 2);

    expect(result).toBe(true);
  });

  it('возвращает false если key не равен "/" и current не начинается с key', () => {
    const result = isActiveKey('/path', '/otherpath', 2);

    expect(result).toBe(false);
  });
});
