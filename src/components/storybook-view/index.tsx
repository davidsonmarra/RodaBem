import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

const StorybookView = ({children, style}: ViewProps) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
});

export default StorybookView;
