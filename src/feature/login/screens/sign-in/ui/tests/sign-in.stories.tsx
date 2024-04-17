import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import SignInScreen from '..';

const SignInScreenMeta: Meta<typeof SignInScreen> = {
  title: 'Screens/SignIn',
  component: SignInScreen,
  decorators: [Story => <Story />],
  args: {
    onSubmit: action('onSubmit'),
    clearErrors: action('clearErrors'),
    errors: {},
  },
};

export default SignInScreenMeta;

export const Default: StoryObj<typeof SignInScreen> = {};
