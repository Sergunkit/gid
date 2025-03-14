import { ActionIcon, Menu } from '@mantine/core';
import { IconDots } from '@tabler/icons-react';

import { Avatar, Badge } from '../../indexUI.ts';
import { declense } from '../../indexUtils.ts';

import { getBadgeColor } from './User.utils.ts';

import './User.styles.css';

type UserProps = {
  type?: 'profile' | 'application';
  avatar?: string;
  title: string;
  description: string;
  level?: string;
  skills?: number;
  editable?: boolean;
  onClick?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
};

/**
 * Компонент `User` отображает базовые данные пользователя
 * в виде имени, должности и аватара пользователя.
 *
 * @param type - Тип отображения пользователя.
 * @param avatar - Аватар пользователя.
 * @param title - Заголовок пользователя.
 * @param description - Описание пользователя.
 * @param level - Уровень навыков пользователя.
 * @param skills - Количество навыков пользователя.
 * @param editable - Флаг редактируемого пользователя.
 * @param onClick - Обработчик нажатия на основное содержимое.
 * @param onEdit - Обработчик редактирования пользователя.
 * @param onDelete - Обработчик удаления пользователя.
 */
export function User({
  type = 'profile',
  avatar,
  title,
  description,
  level,
  skills,
  editable = false,
  onClick,
  onEdit,
  onDelete,
}: UserProps) {
  const declension = declense(['навык', 'навыка', 'навыков'], skills);
  const skillsText = declension && `${skills} ${declension}`;
  const badgeColor = getBadgeColor(level);
  const clickable = typeof onClick === 'function';

  return (
    <span className="user">
      <span
        className={`user-content${skillsText ? ' hoverable' : ''}${clickable ? ' clickable' : ''}`}
        onClick={onClick}
      >
        <Avatar
          type={type === 'application' ? 'application' : 'static'}
          src={avatar}
          name={title}
        />
        <span className="user-details">
          <span className="user-name">{title}</span>
          <span className="user-hover-area">
            <span className="user-hover-container">
              <span className="user-description">
                {level && (
                  <Badge
                    variant={badgeColor}
                    size="small"
                    title={level}
                  />
                )}
                <span className="user-position">{description}</span>
              </span>
              {skillsText && <span className="user-skills">{skillsText}</span>}
            </span>
          </span>
        </span>
      </span>
      {editable && (
        <span className="user-actions">
          <Menu
            position="bottom-end"
            shadow="sm"
            withinPortal
          >
            <Menu.Target>
              <ActionIcon
                variant="subtle"
                color="gray"
              >
                <IconDots size={20} />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item onClick={onEdit}>Редактировать</Menu.Item>
              <Menu.Item onClick={onDelete}>Удалить</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </span>
      )}
    </span>
  );
}
