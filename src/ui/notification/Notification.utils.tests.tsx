import { IconCake, IconCheck, IconNews } from '@tabler/icons-react';

import { getNotificationIcon } from './Notification.utils';

describe('UI/Notification/utils/getNotificationIcon', () => {
  it('Возвращает компонент IconCheck для типа `approval`', () => {
    const result = getNotificationIcon('approval');

    expect(result).toEqual(IconCheck);
  });

  it('Возвращает компонент IconCake для типа `birthday`', () => {
    const result = getNotificationIcon('birthday');

    expect(result).toEqual(IconCake);
  });

  it('Возвращает компонент IconNews для типа `message`', () => {
    const result = getNotificationIcon('message');

    expect(result).toEqual(IconNews);
  });
});
