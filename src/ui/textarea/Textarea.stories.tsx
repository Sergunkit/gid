import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from '@/ui';

const meta = {
  title: 'Компоненты/Textarea',
  component: Textarea,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    value: `Креативный дизайнер с опытом работы в разработке визуальных концепций и брендинге.
      Обладаю высокой степенью внимания к деталям и умением воплощать идеи клиентов
      в стильные и эффективные решения. Всегда нацелен на достижение выдающихся результатов.`,
  },
};
