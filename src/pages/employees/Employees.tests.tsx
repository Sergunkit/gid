import { screen } from '@testing-library/react';

import { data } from '@/mocks';
import { server } from '@/mocks';
import { Employees } from '@/pages';
import { renderWrapped } from '@/testing';

describe('Employees', () => {
  it('Отображает содержимое страницы', () => {
    renderWrapped(<Employees />);

    server.events.on('request:end', () => {
      const title = screen.getByText('Справочник сотрудников');
      const items = screen.getAllByRole('listitem');

      expect(title).toBeInTheDocument();
      expect(items).toHaveLength(data.usersGet.length);
    });
  });
});
