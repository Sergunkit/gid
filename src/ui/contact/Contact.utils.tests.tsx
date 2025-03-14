import { render } from '@testing-library/react';

import { getContactIcon } from './Contact.utils';

describe('UI/Contact/utils/getContactIcon', () => {
  it('Возвращает иконку `phone`', () => {
    const result = getContactIcon('phone');
    const { container } = render(result);
    const icon = container.querySelector('svg');

    expect(icon).toHaveClass('tabler-icon-phone');
  });

  it('Возвращает иконку `email`', () => {
    const result = getContactIcon('email');
    const { container } = render(result);
    const icon = container.querySelector('svg');

    expect(icon).toHaveClass('tabler-icon-mail');
  });

  it('Возвращает иконку `telegram`', () => {
    const result = getContactIcon('telegram');
    const { container } = render(result);
    const icon = container.querySelector('svg');

    expect(icon).toHaveClass('tabler-icon-brand-telegram');
  });
});
