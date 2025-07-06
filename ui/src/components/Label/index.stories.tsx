import type { Meta, StoryObj } from '@storybook/react';
import Label from './index';

const meta: Meta<typeof Label> = {
  title: 'UI/Label',
  component: Label,
  tags: ['autodocs'],
  args: {
    children: 'Label',
  }
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {},
};

export const WithError: Story = {
  args: {
    isError: true,
  },
};
