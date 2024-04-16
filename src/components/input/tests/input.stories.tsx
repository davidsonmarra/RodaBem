import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {StorybookView} from '@components';
import Input from '..';

const InputMeta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  args: {
    placeholder: 'Placeholder',
    label: '',
    error: '',
  },
  decorators: [
    Story => (
      <StorybookView>
        <Story />
      </StorybookView>
    ),
  ],
};

export default InputMeta;

export const Default: StoryObj<typeof Input> = {};

export const WithLabel: StoryObj<typeof Input> = {
  args: {
    label: 'Label',
  },
};

export const WithError: StoryObj<typeof Input> = {
  args: {
    error: 'Error message',
  },
};
