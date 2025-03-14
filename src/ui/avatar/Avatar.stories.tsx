import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '@/ui';

import avatar from '@/assets/avatar.svg';

const meta = {
  title: 'Компоненты/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    controls: { exclude: ['src'] },
  },
  argTypes: {
    loading: { control: 'boolean' },
    editable: { control: 'boolean' },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: avatar,
    name: 'Александр Васильевич',
    size: 'medium',
    loading: false,
    editable: false,
  },
};
