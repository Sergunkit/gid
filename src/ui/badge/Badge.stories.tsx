import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '@/ui';

const meta = {
  title: 'Компоненты/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    title: 'L4',
    variant: 'green',
    size: 'medium',
  },
};
