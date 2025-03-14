import type { Meta, StoryObj } from '@storybook/react';

import { Notification } from '@/ui';

const meta = {
  title: 'Компоненты/Notification',
  component: Notification,
  parameters: { layout: 'centered' },
  argTypes: {
    type: {
      control: 'radio',
      options: ['birthday', 'message', 'approval'],
    },
  },
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Birthday: Story = {
  args: {
    link: '',
    person: {
      name: 'Александр Войковский',
      link: '/profile',
    },
    text: '',
    type: 'birthday',
  },
};

export const Unread: Story = {
  args: {
    link: '',
    person: {
      name: 'Александр Войковский',
      link: '/profile',
    },
    text: '',
    type: 'birthday',
    unread: true,
  },
};

export const Message: Story = {
  args: {
    link: '/',
    text: 'Режим работы офиса в праздники.',
    type: 'message',
    unread: true,
  },
};
