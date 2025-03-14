import { MantineProvider } from '@mantine/core';
import type { Meta, StoryObj } from '@storybook/react';

import { Person } from '@/ui';

import avatar from '@/assets/avatar.svg';

const meta = {
  title: 'Компоненты/Person',
  component: Person,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Person>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    avatar: avatar,
    timezone: 'Europe/Kaliningrad',
    name: 'Лариса Иванова',
    teams: ['Команда 1', 'Команда 2', 'Команда 3'],
    skills: [
      {
        id: 0,
        name: 'Figma',
      },
      {
        id: 1,
        name: 'Photoshop',
      },
      {
        id: 2,
        name: 'Дизайн',
      },
      {
        id: 3,
        name: 'Продуктовый дизайн',
      },
      {
        id: 4,
        name: 'Прототипирование',
      },
      {
        id: 5,
        name: 'UX-копирайтинг',
      },
      {
        id: 6,
        name: 'UX-аналитика',
      },
      {
        id: 7,
        name: 'Графический дизайн',
      },
      {
        id: 8,
        name: 'Дизайн интерфейсов',
      },
    ],
    telegram: '@larisa_ivanova',
    email: 'exlivanova@gid.ru',
    phone: '+7 (999) 999-99-99',
  },
  render: args => (
    <MantineProvider>
      <div style={{ width: '697px' }}>
        <Person {...args} />
      </div>
    </MantineProvider>
  ),
};
