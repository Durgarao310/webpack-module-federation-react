import type { Meta, StoryObj } from '@storybook/react';
import Radio from './index';

const meta: Meta<typeof Radio> = {
  title: 'UI/Radio',
  component: Radio,
  tags: ['autodocs'],
  args: {
    label: 'Radio',
    name: 'radio-group',
  }
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    value: 'default',
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    value: 'checked',
    checked: true,
  },
};
