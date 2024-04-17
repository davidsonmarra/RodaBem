import React from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import SignInContainer from './ui';
import schema, {FormData} from './scheme';

interface Props {}

const SignInScreen = ({}: Props) => {
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
    />
  );
};

export default SignInScreen;
