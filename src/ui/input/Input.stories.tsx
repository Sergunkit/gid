import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '@/ui';

const meta = {
  title: 'Компоненты/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    controls: { exclude: ['onClick'] },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Введите значение',
    value: 'Текст',
  },
};
