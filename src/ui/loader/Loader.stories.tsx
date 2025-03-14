import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from '@/ui';

const meta = {
  title: 'Компоненты/Loader',
  component: Loader,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 36,
    page: false,
  },
};
