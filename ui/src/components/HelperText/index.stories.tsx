import type { Meta, StoryObj } from '@storybook/react';
import HelperText from './index';

const meta: Meta<typeof HelperText> = {
  title: 'UI/HelperText',
  component: HelperText,
  tags: ['autodocs'],
  args: {
    children: 'This is a helper text',
  }
};

export default meta;
type Story = StoryObj<typeof HelperText>;

export const Default: Story = {
  args: {},
};

export const WithError: Story = {
  args: {
    hasError: true,
    children: 'This is an error message',
  },
};
