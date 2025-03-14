import type { Meta, StoryObj } from '@storybook/react';

import { Breadcrumbs } from '@/ui';

const meta = {
  title: 'Компоненты/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
    controls: { exclude: ['onClick'] },
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        title: 'Газпром Россия Отдел с длинным названием',
        href: '#',
      },
      {
        title: 'Газпром ID Отдел с длинным названием',
        href: '#',
      },
      {
        title: 'Дизайн студия Отдел с длинным названием',
        href: '#',
      },
      {
        title: 'Отдел продуктового дизайна',
        href: '#',
      },
    ],
  },
};
