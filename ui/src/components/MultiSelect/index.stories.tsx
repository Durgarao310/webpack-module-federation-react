import type { Meta, StoryObj } from '@storybook/react';
import MultiSelect from './index';

const meta: Meta<typeof MultiSelect> = {
  title: 'UI/MultiSelect',
  component: MultiSelect,
  tags: ['autodocs'],
  args: {
    options: [
      { label: 'React', value: 'react' },
      { label: 'Angular', value: 'angular' },
      { label: 'Vue', value: 'vue' },
      { label: 'Svelte', value: 'svelte' },
      { label: 'Ember', value: 'ember' },
    ],
    placeholder: 'Select a framework',
  }
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

export const Default: Story = {
  args: {},
};

export const WithDefaultValues: Story = {
  args: {
    defaultValue: ['react', 'vue'],
  },
};

export const WithMaxCount: Story = {
  args: {
    defaultValue: ['react', 'vue', 'svelte', 'angular'],
    maxCount: 2,
  },
};
