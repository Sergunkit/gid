import { screen } from '@testing-library/react';

import { server } from '@/mocks';
import { TeamList } from '@/pages';
import { renderWrapped } from '@/testing';

describe('TeamList', () => {
  it('Отображает содержимое страницы', () => {
    renderWrapped(<TeamList />);

    server.events.on('request:end', () => {
      const title = screen.getByText('Справочник команд');
      const list = document.querySelector('.team-list');

      expect(title).toBeInTheDocument();
      expect(list).toBeInTheDocument();
    });
  });
});
