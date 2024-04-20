import {colors} from '@theme';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

function AddIcon({width = '56', height = '56', fill = colors.buttonText}) {
  return (
    <Svg width={width} height={height} fill={fill} viewBox="0 -960 960 960">
      <Path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240z" />
    </Svg>
  );
}

export default AddIcon;
