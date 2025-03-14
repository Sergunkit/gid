import type { Meta, StoryObj } from '@storybook/react';

import { Definition } from '@/ui';

const meta = {
  title: 'Компоненты/Definition',
  component: Definition,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Definition>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Адрес офиса:',
    value: 'Ленинградский пр-т., 72 к 4, Москва',
  },
};
