import type { Meta, StoryObj } from '@storybook/react';
import { IconDownload } from '@tabler/icons-react';

import { Button } from '@/ui';

const meta = {
  title: 'Компоненты/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    controls: { exclude: ['leftSection', 'rightSection'] },
  },
  argTypes: { disabled: { control: 'boolean' } },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    variant: 'default',
    children: 'Button',
  },
};

export const Download: Story = {
  args: {
    rightSection: <IconDownload size={14} />,
    children: 'Download',
  },
};
