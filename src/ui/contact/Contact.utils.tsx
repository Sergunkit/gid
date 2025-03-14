import { IconBrandTelegram, IconMail, IconPhone } from '@tabler/icons-react';

import type { ContactType } from './Contact.types';

/**
 * Возвращает иконку контакта в зависимости от его типа.
 *
 * @param type - Тип контакта.
 */
export function getContactIcon(type: ContactType) {
  switch (type) {
    case 'phone':
      return (
        <IconPhone
          size={20}
          stroke={1.75}
        />
      );
    case 'telegram':
      return (
        <IconBrandTelegram
          size={20}
          stroke={1.75}
        />
      );
    default:
      return (
        <IconMail
          size={20}
          stroke={1.75}
        />
      );
  }
}
