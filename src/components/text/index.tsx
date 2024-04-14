import React from 'react';
import {Text as RNText, StyleProp, TextProps, TextStyle} from 'react-native';
import styles from './styles';

export enum TextType {
  title = 'title',
  text = 'text',
  textBold = 'textBold',
  buttonPrimary = 'buttonPrimary',
  buttonSecondary = 'buttonSecondary',
}

interface Props extends TextProps {
  children: string;
  type: TextType;
  extraStyle?: StyleProp<TextStyle>;
}

const textStyle = {
  [TextType.title]: styles.title,
  [TextType.text]: styles.text,
  [TextType.textBold]: styles.textBold,
  [TextType.buttonPrimary]: styles.buttonPrimary,
  [TextType.buttonSecondary]: styles.buttonSecondary,
};

const Text = ({children, type, extraStyle}: Props) => {
  return <RNText style={[textStyle[type], extraStyle]}>{children}</RNText>;
};

export default Text;