import type { Meta, StoryObj } from '@storybook/react';

import { Pills } from '@/ui';

const meta = {
  title: 'Компоненты/Pills',
  component: Pills,
  parameters: {
    layout: 'centered',
    controls: { exclude: ['onChange'] },
  },
} satisfies Meta<typeof Pills>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: [
      {
        id: 0,
        name: 'Figma',
      },
      {
        id: 1,
        name: 'Photoshop',
      },
      {
        id: 2,
        name: 'Дизайн',
      },
      {
        id: 3,
        name: 'Продуктовый дизайн',
      },
      {
        id: 4,
        name: 'Прототипирование',
      },
      {
        id: 5,
        name: 'UX-копирайтинг',
      },
      {
        id: 6,
        name: 'Графический дизайн',
      },
      {
        id: 7,
        name: 'Дизайн интерфейсов',
      },
      {
        id: 8,
        name: 'Дизайн мобильных приложений',
      },
      {
        id: 9,
        name: 'Дизайн высоко нагруженных систем',
      },
    ],
    editable: true,
  },
};
