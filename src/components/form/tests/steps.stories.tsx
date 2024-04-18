import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {StorybookView} from '@components';
import Steps from '../steps';

const StepsMeta: Meta<typeof Steps> = {
  title: 'Components/Step',
  component: Steps,
  args: {
    currentStep: 0,
    totalSteps: 3,
  },
  decorators: [
    Story => (
      <StorybookView>
        <Story />
      </StorybookView>
    ),
  ],
};

export default StepsMeta;

export const Default: StoryObj<typeof Steps> = {};
