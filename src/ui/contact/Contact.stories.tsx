import { MantineProvider } from '@mantine/core';
import type { Meta, StoryObj } from '@storybook/react';

import { Contact } from '@/ui';

const meta = {
  title: 'Компоненты/Contact',
  component: Contact,
  parameters: {
    layout: 'centered',
    controls: { exclude: ['leftSection', 'rightSection'] },
  },
  argTypes: { showValue: { control: 'boolean' } },
} satisfies Meta<typeof Contact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'email',
    value: 'iivanov@example.com',
    showValue: true,
  },
  render: args => (
    <MantineProvider>
      <Contact {...args} />
    </MantineProvider>
  ),
};
