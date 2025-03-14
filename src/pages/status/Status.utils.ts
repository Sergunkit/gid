import type { BadgeVariant } from '@/ui/badge/Badge.types';

type StatusData = {
  color: BadgeVariant;
  title: string;
  description: string;
};

export function getStatusData(value?: number): StatusData {
  if (value === 401) {
    return {
      color: 'green',
      title: 'Авторизуйтесь',
      description: 'Доступ к этой странице требует авторизации',
    };
  }

  if (value === 403) {
    return {
      color: 'blue',
      title: 'Доступ запрещен',
      description: 'Сервер запретил прямой доступ к этому ресурсу',
    };
  }

  if (value === 500) {
    return {
      color: 'purple',
      title: 'Внутренняя ошибка сервера',
      description: 'Запрос не был завершен из-за ошибки сервера',
    };
  }

  if (value === 502) {
    return {
      color: 'purple',
      title: 'Плохой шлюз',
      description: 'От сервера пришел ответ в неправильном формате',
    };
  }

  if (value === 504) {
    return {
      color: 'purple',
      title: 'Таймаут шлюза',
      description: 'Запрос не был завершен вовремя, нет сигналов',
    };
  }

  return {
    color: 'orange',
    title: 'Такой страницы нет',
    description: 'Возможно, она была перемещена или удалена',
  };
}
