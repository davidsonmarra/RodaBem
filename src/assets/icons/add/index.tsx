import React from 'react';
import {colors} from '@theme';
import {Path, Svg} from 'react-native-svg';

const AddIcon = ({width = '48', height = '48', fill = colors.buttonText}) => (
  <Svg width={width} height={height} fill={fill} viewBox="0 -960 960 960">
    <Path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240z" />
  </Svg>
);

export default AddIcon;
