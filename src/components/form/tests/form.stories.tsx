import React from 'react';
import {StyleSheet} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {StorybookView} from '@components';
import {signUpFormData} from '@mocks';
import Form from '..';

const FormMeta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  args: {
    data: signUpFormData,
    currentStep: 0,
    setIsDisabled: action('setIsDisabled'),
  },
  decorators: [
    Story => (
      <StorybookView style={styles.container}>
        <Story />
      </StorybookView>
    ),
  ],
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 48,
    paddingHorizontal: 24,
  },
});

export default FormMeta;

export const Step1: StoryObj<typeof Form> = {};

export const Step2: StoryObj<typeof Form> = {
  args: {
    currentStep: 1,
  },
};

export const Step3: StoryObj<typeof Form> = {
  args: {
    currentStep: 2,
  },
};

export const Step4: StoryObj<typeof Form> = {
  args: {
    currentStep: 3,
  },
};
