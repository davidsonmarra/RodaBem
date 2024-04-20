import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import styles from './styles';

interface ButtonIconProps extends TouchableOpacityProps {}

const ButtonIcon = ({children, onPress}: ButtonIconProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {children}
    </TouchableOpacity>
  );
};

export default ButtonIcon;
