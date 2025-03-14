import type { FloatingPosition } from '@mantine/core';
import { Tooltip } from '@mantine/core';

import { useClipboard } from '../../indexHooks.ts';

import type { ContactType } from './Contact.types.ts';
import { getContactIcon } from './Contact.utils.tsx';

import './Contact.styles.css';

type ContactProps = {
  type: ContactType;
  value: string;
  showValue?: boolean;
};

/**
 * Компонент `Contact` отображает контактные данные
 * пользователя в виде иконки и значения.
 *
 * @param type - Тип контакта.
 * @param value - Значение контакта.
 * @param showValue - Показывать значение контакта.
 */
export function Contact({ type, value, showValue = true }: ContactProps) {
  const { copy, copied } = useClipboard();
  const position = showValue ? 'right' : 'top';
  const icon = getContactIcon(type);

  async function handleCopy() {
    await copy(value);
  }

  return (
    <Tooltip
      label={copied ? 'Скопировано' : 'Копировать'}
      position={position as FloatingPosition}
      withArrow
    >
      <button
        className="contact-button"
        type="button"
        data-value={value}
        onClick={handleCopy}
      >
        <span className="contact-icon">{icon}</span>
        {showValue && <span className="contact-value">{value}</span>}
      </button>
    </Tooltip>
  );
}
