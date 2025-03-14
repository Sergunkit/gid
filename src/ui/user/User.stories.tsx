import type { Meta, StoryObj } from '@storybook/react';

import { User } from '@/ui';

import avatar from '@/assets/avatar.svg';

const meta = {
  title: 'Компоненты/User',
  component: User,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof User>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    avatar: avatar,
    title: 'Александр Васильевич',
    description: 'Веб-разработчик',
  },
};
