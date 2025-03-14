import { getLeaveImage } from './Leave.utils';

import business from './assets/business.svg';
import sickness from './assets/sickness.svg';
import vacation from './assets/vacation.svg';

describe('UI/Leave/utils/getLeaveImage', () => {
  it('Возвращает изображение для типа `vacation`', () => {
    const result = getLeaveImage('vacation');

    expect(result).toEqual(vacation);
  });

  it('Возвращает изображение для типа `sickness`', () => {
    const result = getLeaveImage('sickness');

    expect(result).toEqual(sickness);
  });

  it('Возвращает изображение для типа `business` (по умолчанию)', () => {
    const result = getLeaveImage('holiday');

    expect(result).toEqual(business);
  });
});
