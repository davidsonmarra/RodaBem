import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import SignInContainer from '..';

const SignInContainerMeta: Meta<typeof SignInContainer> = {
  title: 'Screens/Login/SignIn',
  component: SignInContainer,
  decorators: [Story => <Story />],
  args: {
    onSubmit: action('onSubmit'),
    clearErrors: action('clearErrors'),
    errors: {},
  },
};

export default SignInContainerMeta;

export const Default: StoryObj<typeof SignInContainer> = {};
