import type { Meta, StoryObj } from '@storybook/react';

import { Leave } from '@/ui';

const meta = {
  title: 'Компоненты/Leave',
  component: Leave,
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['sickness', 'vacation', 'business'],
    },
  },
} satisfies Meta<typeof Leave>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vacation: Story = {
  args: {
    variant: 'vacation',
    period: '2 – 15 декабря',
    reason: 'Отпуск',
  },
};
