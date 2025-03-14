import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '@/ui';

const meta = {
  title: 'Компоненты/Card',
  component: Card,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Карточка с данными',
    children: 'Содержимое карточки с большим количеством текста',
  },
};
