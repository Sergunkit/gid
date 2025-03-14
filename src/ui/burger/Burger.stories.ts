import type { Meta, StoryObj } from '@storybook/react';

import { Burger } from '@/ui';

const meta = {
  title: 'Компоненты/Burger',
  component: Burger,
  parameters: {
    layout: 'centered',
    controls: { exclude: ['label', 'onClick'] },
  },
} satisfies Meta<typeof Burger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultOpened: false,
    label: 'Открыть меню',
  },
};
