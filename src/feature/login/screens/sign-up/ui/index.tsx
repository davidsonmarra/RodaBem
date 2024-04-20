import {Button} from '@components';
import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {Header} from '@components';
import Form from 'src/components/form';
import styles from './styles';
import {Control} from 'react-hook-form';
import {FormDataRegister} from '../scheme';

interface Props {
  data: any;
  control?: Control<FormDataRegister, any>;
  onBack: () => void;
  onSubmit: () => void;
  listRef: React.RefObject<FlatList>;
  currentStep: number;
  isLoading: boolean;
  isDisabled: boolean;
  setIsDisabled: (isDisabled: boolean) => void;
}

const SignUpContainer = ({
  data,
  control,
  onBack,
  listRef,
  onSubmit,
  currentStep,
  isLoading,
  isDisabled,
  setIsDisabled,
}: Props) => {
  const isLastStep = currentStep === data.length - 1;

  return (
    <SafeAreaView style={styles.container}>
      <Header text="Cadastrar" onBack={onBack} />
      <View style={styles.content}>
        <View style={styles.formContainer}>
          <Form
            data={data}
            control={control}
            listRef={listRef}
            currentStep={currentStep}
            setIsDisabled={setIsDisabled}
          />
        </View>
        <Button
          text={isLastStep ? 'Cadastrar' : 'Continuar'}
          onPress={onSubmit}
          isLoading={isLoading}
          isDisabled={isDisabled}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignUpContainer;
