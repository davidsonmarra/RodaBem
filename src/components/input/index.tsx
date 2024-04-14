import React from 'react';
import {TextInput, TextInputProps} from 'react-native';
import styles from './styles';

interface Props extends TextInputProps {}

const Input = ({...rest}: Props) => {
  return <TextInput style={styles.container} {...rest} />;
};

export default Input;
