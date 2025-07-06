import type { Meta, StoryObj } from '@storybook/react';
import Button from './index';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Filled: Story = {
  args: {
    variant: 'filled',
    color: 'primary',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    color: 'primary',
  },
};
