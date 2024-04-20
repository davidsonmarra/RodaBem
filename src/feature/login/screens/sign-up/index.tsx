import React, {useRef, useState} from 'react';
import SignUpContainer from './ui';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';
import {FlatList} from 'react-native';
import {RootStackParamList} from 'src/feature/login/navigation';
import {signUpDataForm as data} from 'src/feature/login/utils';
import {useFormScroll} from '../../hooks';
import {FormDataRegister} from './scheme';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

interface Props extends NavigationProps {
  defaultValues?: FormDataRegister;
}

const SignUpScreen = ({
  navigation: {goBack},
  defaultValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  },
}: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const {control, handleSubmit} = useForm<FormDataRegister>({
    mode: 'onChange',
    defaultValues,
  });
  const listRef = useRef<FlatList>(null);

  const {
    currentStep,
    scrollToBackStep,
    scrollToNextStep,
    verifyIfScrollIsPossible,
  } = useFormScroll({listRef, dataLength: data.length});

  const onSuccess = (formData: any) => {
    setIsLoading(true);
    console.log('handleSubmit(onSuccess)()', formData);
  };

  const onSubmit = () => {
    if (currentStep === data.length - 1) {
      handleSubmit(onSuccess)();
    } else {
      scrollToNextStep();
    }
  };

  return (
    <SignUpContainer
      data={data}
      control={control}
      onBack={() => {
        verifyIfScrollIsPossible(-1) ? scrollToBackStep() : goBack();
      }}
      onSubmit={onSubmit}
      listRef={listRef}
      currentStep={currentStep}
      isLoading={isLoading}
      isDisabled={isDisabled}
      setIsDisabled={setIsDisabled}
    />
  );
};

export default SignUpScreen;
