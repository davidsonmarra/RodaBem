import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {StorybookView} from '@components';
import Card from '..';

const FormMeta: Meta<typeof Card> = {
  title: 'Screens/Home/Components/Card',
  component: Card,
  args: {
    onPress: action('onPress'),
    data: {
      name: 'Name',
      brand: 'Brand',
      kmDriven: '100',
      kmPerLiter: '10',
    },
  },
  decorators: [
    Story => (
      <StorybookView>
        <Story />
      </StorybookView>
    ),
  ],
};

export default FormMeta;

export const Default: StoryObj<typeof Card> = {};
