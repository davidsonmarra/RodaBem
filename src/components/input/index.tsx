import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import {ErrorSvg} from '../../assets';
import {Text, TextType, VerticalSpacer} from '@components';
import getStyles from './styles';

export interface Props extends TextInputProps {
  label?: string;
  error?: string;
}

const Input = ({label = '', error = '', ...rest}: Props) => {
  return (
    <View style={getStyles().container}>
      <Text style={getStyles().label} type={TextType.label}>
        {label}
      </Text>
      <VerticalSpacer height={8} />
      <View style={getStyles(error).inputContainer}>
        <TextInput style={getStyles().input} {...rest} />
        {error && (
          <View style={getStyles().tailError}>
            <ErrorSvg width="20" height="20" fill="#FFF" />
          </View>
        )}
      </View>
      {error && (
        <>
          <VerticalSpacer height={4} />
          <Text style={getStyles().error} type={TextType.error}>
            {error}
          </Text>
        </>
      )}
    </View>
  );
};

export default Input;
