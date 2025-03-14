import { BrowserRouter } from 'react-router';
import type { Meta, StoryObj } from '@storybook/react';

import { Tree } from '@/ui';

import type { TreeProps } from './Tree.component';

const items = [
  {
    id: 1,
    level: 0,
    name: 'ГИД',
    count: 24,
    priority: 1,
    children: [
      {
        id: 2,
        level: 1,
        name: 'ЕПВ',
        count: 16,
        priority: 1,
        children: [
          {
            id: 4,
            level: 2,
            name: 'Команда 1 молодости нашей, команда без которой нам не жить',
            count: 8,
            priority: 1,
            children: null,
          },
          {
            id: 5,
            level: 2,
            name: 'Команда 2',
            count: 8,
            priority: 2,
            children: null,
          },
        ],
      },
      {
        id: 3,
        level: 1,
        name: 'R&D',
        count: 16,
        priority: 1,
        children: [
          {
            id: 6,
            level: 2,
            name: 'Команда 3',
            count: 10,
            priority: 1,
            children: null,
          },
          {
            id: 7,
            level: 2,
            name: 'Команда 4',
            count: 6,
            priority: 2,
            children: null,
          },
        ],
      },
    ],
  },
];

const meta = {
  title: 'Компоненты/Tree',
  component: Tree,
  parameters: {
    layout: 'centered',
    controls: { exclude: ['items', 'url'] },
  },
} satisfies Meta<typeof Tree>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: items,
    current: '3',
    url: '/items',
  },
  render: (args: TreeProps) => (
    <BrowserRouter>
      <div style={{ width: '240px' }}>
        <Tree {...args} />
      </div>
    </BrowserRouter>
  ),
};
