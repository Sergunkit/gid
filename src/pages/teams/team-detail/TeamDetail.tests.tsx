import { MantineProvider } from '@mantine/core';
import { screen } from '@testing-library/react';

import { server } from '@/mocks';
import { TeamDetail } from '@/pages';
import { renderWrapped } from '@/testing';

describe('TeamDetail', () => {
  it('Отображает содержимое страницы', () => {
    renderWrapped(
      <MantineProvider>
        <TeamDetail />
      </MantineProvider>,
    );

    server.events.on('request:end', () => {
      const title = screen.getByText('Команда');
      const backLink = screen.getByText('Назад к списку команд');

      expect(title).toBeInTheDocument();
      expect(backLink).toBeInTheDocument();
    });
  });
});
