import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Control, FieldErrors, UseFormClearErrors} from 'react-hook-form';
import {
  Button,
  ButtonType,
  Input,
  Text,
  TextType,
  VerticalSpacer,
} from '@components';
import styles from './styles';
import {FormData} from '../scheme';

interface Props {
  control: Control<FormData, any>;
  onSubmit: () => void;
  errors: FieldErrors<FormData>;
  clearErrors: UseFormClearErrors<any>;
}

const SignInContainer = ({control, onSubmit, errors, clearErrors}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text type={TextType.title}>Logo</Text>
      </View>
      <View style={{width: '100%'}}>
        <Text type={TextType.text}>Entre na sua conta</Text>
        <VerticalSpacer height={24} />
        <Input
          label="E-mail"
          placeholder="Digite seu e-mail"
          control={control}
          error={errors?.email?.message}
          autoCapitalize="none"
          keyboardType="email-address"
          name="email"
          clearError={() => clearErrors('email')}
        />
        <VerticalSpacer height={16} />
        <Input
          label="Senha"
          placeholder="Digite sua senha de acesso"
          control={control}
          error={errors?.password?.message}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          name="password"
          clearError={() => clearErrors('password')}
        />
        <VerticalSpacer height={24} />
        <Button
          style={{width: 'auto'}}
          text="Esqueci a senha"
          type={ButtonType.secondary}
        />
      </View>
      <View style={{width: '100%'}}>
        <Button
          onPress={() => onSubmit()}
          text="Entrar"
          type={ButtonType.primary}
        />
        <Button text="Cadastrar" type={ButtonType.secondary} />
      </View>
    </SafeAreaView>
  );
};

export default SignInContainer;
