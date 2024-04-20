import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import SignUpScreen from '..';
import {signUpDataForm} from 'src/feature/login/utils';

const SignUpScreenMeta: Meta<typeof SignUpScreen> = {
  title: 'Screens/SignUp',
  component: SignUpScreen,
  decorators: [Story => <Story />],
  args: {
    data: signUpDataForm,
    currentStep: 0,
    onSubmit: action('onSubmit'),
    setIsDisabled: action('setIsDisabled'),
  },
};

export default SignUpScreenMeta;

export const Step1: StoryObj<typeof SignUpScreen> = {};

export const Step2: StoryObj<typeof SignUpScreen> = {
  args: {
    currentStep: 1,
  },
};

export const Step3: StoryObj<typeof SignUpScreen> = {
  args: {
    currentStep: 2,
  },
};

export const Step4: StoryObj<typeof SignUpScreen> = {
  args: {
    currentStep: 3,
  },
};
