import React from 'react';
import {View, ViewProps} from 'react-native';
import getStyles from './styles';

interface Props extends ViewProps {
  width: number;
}

const HorizontalSpacer = ({width}: Props) => {
  return <View style={getStyles(width).container} />;
};

export default HorizontalSpacer;
