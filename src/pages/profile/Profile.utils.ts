import type { User } from '@/auth';

type UserParams = {
  userId?: number;
  editable: boolean;
};

/**
 * Возвращает идентификатор и флаг возможности редактирования
 * данных пользователем.
 *
 * @param id - Идентификатор профиля.
 * @param user - Данные авторизованного пользователя.
 */
export function getUserParams(id?: string, user?: User): UserParams {
  const isMe = typeof id === 'undefined';
  const parsedId = Number.parseInt(id ?? '', 10);
  const profileId = Number.isNaN(parsedId) ? undefined : parsedId;
  const userFallbackId = user?.id ?? undefined;
  const userId = isMe ? userFallbackId : profileId;
  const editable = user?.id === userId;

  return {
    userId,
    editable,
  };
}
