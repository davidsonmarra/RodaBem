import React from 'react';
import {Text} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {StorybookView} from '@components';
import ButtonIcon from '..';
import {AddIcon} from '@assets';

const ButtonIconMeta: Meta<typeof ButtonIcon> = {
  title: 'Components/ButtonIcon',
  component: ButtonIcon,
  args: {
    children: <AddIcon />,
    onPress: action('onPress'),
  },
  decorators: [
    Story => (
      <StorybookView>
        <Story />
      </StorybookView>
    ),
  ],
};

export default ButtonIconMeta;

export const Default: StoryObj<typeof ButtonIcon> = {};
