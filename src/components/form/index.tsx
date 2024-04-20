import {Input, Text, TextType, VerticalSpacer} from '@components';
import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {ZodError, ZodIssue} from 'zod';
import schema from 'src/feature/login/screens/sign-up/scheme';
import {DataProps} from 'src/feature/login/utils';
import getStyles from './styles';
import Steps from './steps';
import {Control, FieldValues, useForm, useWatch} from 'react-hook-form';

export interface Props {
  data: DataProps[];
  control?: Control<any, any>;
  listRef: React.RefObject<FlatList<any>>;
  currentStep: number;
  setIsDisabled: (isDisabled: boolean) => void;
}

const renderItem = (item: DataProps, control: Control<FieldValues, any>) => (
  <View style={getStyles({}).item}>
    <VerticalSpacer height={40} />
    <Text type={TextType.title}>{item.title}</Text>
    <VerticalSpacer height={16} />
    <Text type={TextType.text}>{item.text}</Text>
    <VerticalSpacer height={16} />
    <Input
      name={item.name}
      label={item.label}
      placeholder={item.placeholder}
      control={control}
    />
  </View>
);

const verifyIfErrorAtCurrentStep = (
  errors: ZodIssue[],
  currentStepName: string,
) => errors.some(error => error.path.includes(currentStepName));

const Form = ({data, control, listRef, currentStep, setIsDisabled}: Props) => {
  const {control: formControl} = useForm({
    defaultValues: data.reduce((acc, item) => ({...acc, [item.name]: ''}), {}),
  });

  if (!control) {
    control = formControl;
  }

  const fieldValue = useWatch({control});

  useEffect(() => {
    if (fieldValue) {
      try {
        schema.parse(fieldValue);
        setIsDisabled(false);
      } catch (error) {
        if (error instanceof ZodError) {
          verifyIfErrorAtCurrentStep(error.errors, data[currentStep]?.name)
            ? setIsDisabled(true)
            : setIsDisabled(false);
        }
      }
    }
  }, [fieldValue, currentStep, data, setIsDisabled]);

  return (
    <View style={getStyles({}).container}>
      <View style={getStyles({}).wrapper}>
        <Steps currentStep={currentStep} totalSteps={data.length} />
        <View style={getStyles({}).wrapper}>
          <FlatList
            data={data}
            keyExtractor={item => `${item.step}`}
            ref={listRef}
            renderItem={({item}) => renderItem(item, control)}
            decelerationRate="fast"
            bounces={false}
            horizontal
            pagingEnabled
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

export default Form;
