import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {signUpDataForm} from 'src/feature/login/utils';
import SignUpContainer from '..';

const SignUpContainerMeta: Meta<typeof SignUpContainer> = {
  title: 'Screens/Login/SignUp',
  component: SignUpContainer,
  decorators: [Story => <Story />],
  args: {
    data: signUpDataForm,
    currentStep: 0,
    onSubmit: action('onSubmit'),
    setIsDisabled: action('setIsDisabled'),
  },
};

export default SignUpContainerMeta;

export const Step1: StoryObj<typeof SignUpContainer> = {};

export const Step2: StoryObj<typeof SignUpContainer> = {
  args: {
    currentStep: 1,
  },
};

export const Step3: StoryObj<typeof SignUpContainer> = {
  args: {
    currentStep: 2,
  },
};

export const Step4: StoryObj<typeof SignUpContainer> = {
  args: {
    currentStep: 3,
  },
};
