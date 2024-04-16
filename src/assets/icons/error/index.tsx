import React from 'react';
import {Svg, Path} from 'react-native-svg';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const ErrorIcon = ({width = '24', height = '24', fill = '#000000'}: Props) => (
  <Svg width={width} height={height} fill={fill} viewBox="0 -960 960 960">
    <Path d="M480-120q-33 0-56.5-23.5T400-200q0-33 23.5-56.5T480-280q33 0 56.5 23.5T560-200q0 33-23.5 56.5T480-120zm-80-240v-480h160v480H400z" />
  </Svg>
);

export default ErrorIcon;
