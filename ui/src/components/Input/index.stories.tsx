import type { Meta, StoryObj } from '@storybook/react';
import Input from './index';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
  }
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {},
};

export const WithError: Story = {
  args: {
    hasError: true,
    errorMessage: 'This is an error message',
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};
