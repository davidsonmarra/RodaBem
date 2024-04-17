import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {StorybookView} from '@components';
import Header from '..';
import {StyleSheet} from 'react-native';

const HeaderMeta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  args: {
    text: 'Header',
    showLeftIcon: true,
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
  container: {paddingHorizontal: 0},
});

export default HeaderMeta;

export const Default: StoryObj<typeof Header> = {};

export const WithoutLeftIcon: StoryObj<typeof Header> = {
  args: {
    showLeftIcon: false,
  },
};
