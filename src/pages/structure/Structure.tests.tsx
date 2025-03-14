import { screen } from '@testing-library/react';

import { server } from '@/mocks';
import { Structure } from '@/pages';
import { renderWrapped } from '@/testing';

describe('Structure', () => {
  it('Отображает содержимое страницы', () => {
    renderWrapped(<Structure type="projects" />);

    server.events.on('request:end', () => {
      const title = screen.getByText('Проектная структура');

      expect(title).toBeInTheDocument();
    });
  });
});
