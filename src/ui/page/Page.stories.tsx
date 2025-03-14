import type { Meta, StoryObj } from '@storybook/react';

import { Page } from '@/ui';

const meta = {
  title: 'Компоненты/Page',
  component: Page,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Содержимое страницы',
    title: 'Заголовок страницы',
    back: {
      title: 'Назад к проекту',
      href: '/',
    },
  },
};
