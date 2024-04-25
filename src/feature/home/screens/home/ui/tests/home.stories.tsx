import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import HomeContainer from '..';

const HomeContainerMeta: Meta<typeof HomeContainer> = {
  title: 'Screens/Home/Home',
  component: HomeContainer,
  decorators: [Story => <Story />],
  args: {
    onCardPress: action('onCardPress'),
  },
};

export default HomeContainerMeta;

export const Default: StoryObj<typeof HomeContainer> = {};
