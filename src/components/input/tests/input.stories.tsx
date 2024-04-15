import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {StorybookView} from '@components';
import Input from '..';

const InputMeta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  args: {
    placeholder: 'Placeholder',
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
