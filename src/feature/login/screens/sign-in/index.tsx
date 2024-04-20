import React from 'react';
import {useForm} from 'react-hook-form';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {zodResolver} from '@hookform/resolvers/zod';
import {RootStackParamList} from 'src/feature/login/navigation';
import SignInContainer from './ui';
import schema, {FormData} from './scheme';

type Props = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const SignInScreen = ({navigation}: Props) => {
  const {
    control,
    formState: {errors},
    handleSubmit,
    clearErrors,
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    reValidateMode: 'onSubmit',
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit(data => {
    console.log('data', data);
  });

  return (
    <SignInContainer
      control={control}
      onSubmit={onSubmit}
      errors={errors}
      clearErrors={clearErrors}
      onSignUp={() => navigation.navigate('SignUp')}
    />
  );
};

export default SignInScreen;
