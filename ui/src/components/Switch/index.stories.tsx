import type { Meta, StoryObj } from '@storybook/react';
import Switch from './index';

const meta: Meta<typeof Switch> = {
  title: 'UI/Switch',
  component: Switch,
  tags: ['autodocs'],
  args: {
    isChecked: false,
  }
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    isChecked: true,
  },
};
