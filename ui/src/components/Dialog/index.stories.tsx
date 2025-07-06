import type { Meta, StoryObj } from '@storybook/react';
import Dialog from './index';
import Button from '../Button';

const meta: Meta<typeof Dialog> = {
  title: 'UI/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  args: {
    isOpen: true,
    header: 'Dialog Header',
    children: 'Dialog Body',
    footer: <Button>Close</Button>,
  }
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {},
};
