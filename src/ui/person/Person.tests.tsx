import { Link } from 'react-router';
import { act, fireEvent, screen } from '@testing-library/react';

import { renderWrapped } from '@/testing';
import { Person } from '@/ui';

import avatar from '@/assets/avatar.svg';

const navigateSpy = vi.fn();

vi.mock('react-router', async importOriginal => {
  const original = await importOriginal<typeof import('react-router')>();

  return {
    ...original,
    useNavigate: () => navigateSpy,
  };
});

const props = {
  avatar: avatar,
  name: 'Иван Иванов',
  teams: ['Команда 1', 'Команда 2'],
  skills: [
    {
      id: 0,
      name: 'JavaScript',
    },
    {
      id: 1,
      name: 'React',
    },
  ],
  timezone: 'Europe/Moscow',
  phone: '+79123456789',
  email: 'iivanov@example.com',
  telegram: '@iivanovtg',
};

describe('UI/Person', () => {
  it('Отображает компонент Person', () => {
    const { container } = renderWrapped(<Person {...props} />);
    const name = screen.getByText(props.name);
    const phone = container.querySelector(`[data-value="${props.phone}"]`)!;
    const email = container.querySelector(`[data-value="${props.email}"]`)!;
    const telegram = container.querySelector(
      `[data-value="${props.telegram}"]`,
    )!;

    for (const team of props.teams) {
      const teamElement = screen.getByText(team);

      expect(teamElement).toBeInTheDocument();
    }

    for (const skill of props.skills) {
      const skillElement = screen.getByText(skill.name);

      expect(skillElement).toBeInTheDocument();
    }

    expect(name).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(telegram).toBeInTheDocument();
  });

  it('Корректно обрабатывает нажатие на блок контактов', async () => {
    const { container } = renderWrapped(
      <Link to="/page">
        <Person {...props} />
      </Link>,
    );
    const contacts = container.querySelectorAll('.contact-button');
    const firstContact = contacts[0];

    await act(async () => fireEvent.click(firstContact));

    expect(navigateSpy).toHaveBeenCalledTimes(0);
  });
});
