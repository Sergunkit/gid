import * as React from 'react';

import { IconCameraPlus, IconPlus } from '@tabler/icons-react';

import { getInitials } from './Avatar.utils';

import './Avatar.styles.css';

type AvatarProps = {
  type?: 'static' | 'application';
  size?: 'small' | 'medium' | 'large';
  src?: string;
  name?: string;
  loading?: boolean;
  editable?: boolean;
};

/**
 * Компонент `Avatar` отображает аватар пользователя
 * в виде изображения или инициалов пользователя.
 *
 * @param type - Тип отображения аватара.
 * @param size - Размер аватара.
 * @param src - Путь к фотографии пользователя.
 * @param name - Имя пользователя.
 * @param loading - Флаг загрузки аватара.
 * @param editable - Флаг редактирования аватара.
 */
export function Avatar({
  type = 'static',
  size = 'small',
  src,
  name = 'Пользователь',
  loading: initialLoading,
  editable = false,
}: AvatarProps) {
  const [loading, setLoading] = React.useState(initialLoading ?? !!src);
  const [error, setError] = React.useState(false);
  const initials = getInitials(name);

  React.useEffect(() => {
    if (initialLoading !== undefined) {
      setLoading(initialLoading);
    }
  }, [initialLoading]);

  React.useEffect(() => {
    setLoading(!!src);
    setError(!src);
  }, [src]);

  const style = {
    '--avatar-size': `var(--avatar-size-${size})`,
    '--avatar-font': `var(--avatar-font-${size})`,
  } as React.CSSProperties;

  function handleLoad() {
    setError(false);
    setLoading(false);
  }

  function handleError() {
    setError(true);
    setLoading(false);
  }

  if (type === 'application') {
    return (
      <div
        className="avatar avatar-application"
        style={style}
      >
        <IconPlus stroke={2} />
      </div>
    );
  }

  return (
    <div
      className="avatar"
      style={style}
    >
      {loading && (
        <span
          role="status"
          className="avatar-loading"
        />
      )}
      {editable && (
        <span className="avatar-edit">
          <IconCameraPlus
            className="avatar-edit-icon"
            stroke={1.5}
          />
        </span>
      )}
      {!!src && !error && (
        <img
          className="avatar-image"
          src={src}
          alt={name}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
      {(!src || error) && <span className="avatar-initials">{initials}</span>}
    </div>
  );
}
