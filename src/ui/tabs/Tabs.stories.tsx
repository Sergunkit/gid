import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from '@/ui';

const meta = {
  title: 'Компоненты/Tabs',
  component: Tabs,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  {
    id: 'my-profile',
    title: 'Мой профиль',
    children: <>Содержимое вкладки &laquo;Мой профиль&raquo;</>,
  },
  {
    id: 'messages',
    title: 'Команды',
    children: <>Содержимое вкладки &laquo;Команды&raquo;</>,
  },
];

export const Default: Story = {
  args: {
    defaultActive: 'my-profile',
    items: items,
  },
};
