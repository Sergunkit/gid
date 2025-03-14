import type { Meta, StoryObj } from '@storybook/react';

import { Status } from '@/ui';

const meta = {
  title: 'Компоненты/Status',
  component: Status,
  parameters: {
    layout: 'centered',
    controls: { exclude: ['onClick'] },
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium'],
    },
  },
} satisfies Meta<typeof Status>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    title: 'Активный',
    variant: 'green',
    size: 'medium',
  },
};
