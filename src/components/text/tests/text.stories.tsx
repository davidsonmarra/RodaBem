import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {StorybookView} from '@components';
import Text, {TextType} from '..';

const TextMeta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  args: {
    type: TextType.title,
    children: 'Sample Text',
  },
  decorators: [
    Story => (
      <StorybookView>
        <Story />
      </StorybookView>
    ),
  ],
};

export default TextMeta;

export const Title: StoryObj<typeof Text> = {};

export const ButtonPrimary: StoryObj<typeof Text> = {
  args: {
    type: TextType.buttonPrimary,
  },
};

export const ButtonSecondary: StoryObj<typeof Text> = {
  args: {
    type: TextType.buttonSecondary,
  },
};

export const TextDefault: StoryObj<typeof Text> = {
  args: {
    type: TextType.text,
  },
};

export const TextBold: StoryObj<typeof Text> = {
  args: {
    type: TextType.textBold,
  },
};

export const Label: StoryObj<typeof Text> = {
  args: {
    type: TextType.label,
  },
};

export const Error: StoryObj<typeof Text> = {
  args: {
    type: TextType.error,
  },
};

export const Header: StoryObj<typeof Text> = {
  args: {
    type: TextType.header,
  },
};
