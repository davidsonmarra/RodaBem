import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import styles from './styles';
import Text, {TextType} from '../text';

export enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
}

export interface Props extends TouchableOpacityProps {
  text: string;
  type?: ButtonType;
}

const buttonProps = {
  [ButtonType.primary]: {
    buttonStyle: styles.primary,
    textType: TextType.buttonPrimary,
  },
  [ButtonType.secondary]: {
    buttonStyle: styles.secondary,
    textType: TextType.buttonSecondary,
  },
};

const Button = ({text, type = ButtonType.primary, ...rest}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, buttonProps[type].buttonStyle, rest.style]}
      {...rest}>
      <Text type={buttonProps[type].textType}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
