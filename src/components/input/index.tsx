import React, {useState} from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import {Control, Controller, useForm} from 'react-hook-form';
import {ErrorSvg} from '../../assets';
import {Text, TextType, VerticalSpacer} from '@components';
import getStyles from './styles';
import {colors} from '@theme';

export interface Props extends TextInputProps {
  label?: string;
  error?: string;
  control?: Control<any>;
  name?: string;
  clearError?: () => void;
}

const Input = ({
  label = '',
  error = '',
  control,
  name = '',
  clearError,
  ...rest
}: Props) => {
  const [isFocus, setIsFocus] = useState(false);
  const {control: formControl} = useForm({});

  if (control === undefined) {
    control = formControl;
  }

  return (
    <View style={getStyles({}).container}>
      {label && (
        <>
          <Text
            style={getStyles({isFocus}).label}
            type={TextType.label}
            testID="id-label-input-text">
            {label}
          </Text>
          <VerticalSpacer height={8} />
        </>
      )}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={getStyles({error, isFocus}).inputContainer}>
            <TextInput
              style={getStyles({}).input}
              onBlur={() => {
                setIsFocus(false);
                onBlur();
              }}
              onFocus={() => {
                setIsFocus(true);
                clearError?.();
              }}
              onChangeText={onChange}
              value={value}
              {...rest}
            />
            {error && (
              <View
                style={getStyles({}).tailError}
                testID="id-error-input-text">
                <ErrorSvg width="20" height="20" fill={colors.buttonText} />
              </View>
            )}
          </View>
        )}
        name={name}
      />
      {error && (
        <>
          <VerticalSpacer height={4} />
          <Text style={getStyles({}).error} type={TextType.error}>
            {error}
          </Text>
        </>
      )}
    </View>
  );
};

export default Input;
