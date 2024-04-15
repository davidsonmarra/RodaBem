import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {StorybookView} from '@components';
import Button, {ButtonType} from '..';

const ButtonMeta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
  args: {
    text: 'Button Primary',
    type: ButtonType.primary,
  },
  decorators: [
    Story => (
      <StorybookView>
        <Story />
      </StorybookView>
    ),
  ],
};

export default ButtonMeta;

export const Primary: StoryObj<typeof Button> = {};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    type: ButtonType.secondary,
  },
};
