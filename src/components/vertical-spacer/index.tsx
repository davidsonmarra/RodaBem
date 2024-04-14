import React from 'react';
import {View, ViewProps} from 'react-native';
import getStyles from './styles';

interface Props extends ViewProps {
  height: number;
}

const VerticalSpacer = ({height}: Props) => {
  return <View style={getStyles(height).container} />;
};

export default VerticalSpacer;
