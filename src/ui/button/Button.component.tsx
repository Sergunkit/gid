import * as React from 'react';

import type { ButtonColor, ButtonSize, ButtonVariant } from './Button.types';

import './Button.styles.css';

type ButtonProps = {
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  color?: ButtonColor;
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  onClick?: () => void;
};

/**
 * Компонент `Button` отображает кнопку,
 * которая запускает определенное действие.
 *
 * @param leftSection - Левая секция кнопки.
 * @param rightSection - Правая секция кнопки.
 * @param fullWidth - Блочная ширина кнопки.
 * @param disabled - Блокировка кнопки.
 * @param color - Цвет кнопки.
 * @param variant - Стиль кнопки.
 * @param size - Размер кнопки.
 * @param children - Текст кнопки.
 * @param type - Тип кнопки.
 * @param onClick - Обработчик нажатия кнопки.
 */
export function Button({
  leftSection,
  rightSection,
  fullWidth,
  disabled,
  color = 'blue',
  variant = 'filled',
  size = 'sm',
  children = null,
  type = 'button',
  onClick,
}: ButtonProps) {
  const classes = [
    'button',
    `button-${variant}`,
    `button-${color}`,
    `button-${size}`,
    fullWidth ? 'button-fullwidth' : '',
  ];

  return (
    <button
      type={type}
      className={classes.join(' ').trim()}
      data-with-left-section={leftSection ? 'true' : undefined}
      data-with-right-section={rightSection ? 'true' : undefined}
      disabled={disabled ? true : undefined}
      onClick={onClick}
    >
      <span className="button-inner">
        {leftSection && (
          <span
            className="button-section"
            data-position="left"
          >
            {leftSection}
          </span>
        )}
        <span className="button-label">{children}</span>
        {rightSection && (
          <span
            className="button-section"
            data-position="right"
          >
            {rightSection}
          </span>
        )}
      </span>
    </button>
  );
}
