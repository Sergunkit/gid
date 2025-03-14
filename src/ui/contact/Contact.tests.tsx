import { act, fireEvent, screen } from '@testing-library/react';

import { renderWrapped } from '@/testing';
import { Contact } from '@/ui';

describe('UI/Contacts', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('Отображает компонент Contacts', async () => {
    renderWrapped(
      <Contact
        type="phone"
        value="+79012345678"
      />,
    );
    const button = screen.getByRole('button')!;

    await act(async () => fireEvent.click(button));

    setTimeout(() => {
      const tooltip = screen.getByText('Скопировано');

      expect(tooltip).toBeInTheDocument();
    }, 100);

    setTimeout(() => {
      const tooltip = screen.getByText('Скопировано');

      expect(tooltip).not.toBeInTheDocument();
    }, 2000);
  });
});
