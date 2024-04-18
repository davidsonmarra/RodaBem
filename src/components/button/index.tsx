import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import getStyles from './styles';
import Text, {TextType} from '../text';

export enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
}

export interface Props extends TouchableOpacityProps {
  text: string;
  type?: ButtonType;
  isDisabled?: boolean;
}

const buttonProps = (isDisabled: boolean) => ({
  [ButtonType.primary]: {
    buttonStyle: getStyles({isDisabled}).primary,
    textType: TextType.buttonPrimary,
  },
  [ButtonType.secondary]: {
    buttonStyle: getStyles({isDisabled}).secondary,
    textType: TextType.buttonSecondary,
  },
});

const Button = ({
  text,
  type = ButtonType.primary,
  isDisabled = false,
  ...rest
}: Props) => {
  return (
    <TouchableOpacity
      disabled={isDisabled}
      style={[
        getStyles({isDisabled}).container,
        buttonProps(isDisabled)[type].buttonStyle,
        rest.style,
      ]}
      {...rest}>
      <Text type={buttonProps(isDisabled)[type].textType}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
