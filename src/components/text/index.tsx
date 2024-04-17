import React from 'react';
import {Text as RNText, TextProps} from 'react-native';
import styles from './styles';

export enum TextType {
  title = 'title',
  text = 'text',
  textBold = 'textBold',
  buttonPrimary = 'buttonPrimary',
  buttonSecondary = 'buttonSecondary',
  label = 'label',
  error = 'error',
  header = 'header',
}

interface Props extends TextProps {
  children: string;
  type: TextType;
}

const textStyle = {
  [TextType.title]: styles.title,
  [TextType.text]: styles.text,
  [TextType.textBold]: styles.textBold,
  [TextType.buttonPrimary]: styles.buttonPrimary,
  [TextType.buttonSecondary]: styles.buttonSecondary,
  [TextType.label]: styles.label,
  [TextType.error]: styles.error,
  [TextType.header]: styles.header,
};

const Text = ({children, type, style}: Props) => {
  return <RNText style={[textStyle[type], style]}>{children}</RNText>;
};

export default Text;
