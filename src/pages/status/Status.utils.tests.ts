import { getStatusData } from './Status.utils';

describe('ErrorBoundary/utils/getStatusData', () => {
  it('Отображает данные для статуса 401', () => {
    const { color, title, description } = getStatusData(401);

    expect(color).toBe('green');
    expect(title).toBe('Авторизуйтесь');
    expect(description).toBe('Доступ к этой странице требует авторизации');
  });

  it('Отображает данные для статуса 403', () => {
    const { color, title, description } = getStatusData(403);

    expect(color).toBe('blue');
    expect(title).toBe('Доступ запрещен');
    expect(description).toBe('Сервер запретил прямой доступ к этому ресурсу');
  });

  it('Отображает данные для статуса 500', () => {
    const { color, title, description } = getStatusData(500);

    expect(color).toBe('purple');
    expect(title).toBe('Внутренняя ошибка сервера');
    expect(description).toBe('Запрос не был завершен из-за ошибки сервера');
  });

  it('Отображает данные для статуса 502', () => {
    const { color, title, description } = getStatusData(502);

    expect(color).toBe('purple');
    expect(title).toBe('Плохой шлюз');
    expect(description).toBe('От сервера пришел ответ в неправильном формате');
  });

  it('Отображает данные для статуса 504', () => {
    const { color, title, description } = getStatusData(504);

    expect(color).toBe('purple');
    expect(title).toBe('Таймаут шлюза');
    expect(description).toBe('Запрос не был завершен вовремя, нет сигналов');
  });

  it('Отображает данные для статуса по-умолчанию', () => {
    const { color, title, description } = getStatusData(406);

    expect(color).toBe('orange');
    expect(title).toBe('Такой страницы нет');
    expect(description).toBe('Возможно, она была перемещена или удалена');
  });
});
