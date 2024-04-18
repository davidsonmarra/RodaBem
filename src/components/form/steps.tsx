import React, {Fragment} from 'react';
import {View} from 'react-native';
import {HorizontalSpacer} from '@components';
import getStyles from './styles';

export interface Props {
  currentStep: number;
  totalSteps: number;
}

const typeOfStep = (step: number, currentStep: number) => {
  if (step <= currentStep) {
    return 'active';
  } else {
    return 'inactive';
  }
};

export const Step = ({stepType}: {stepType: 'active' | 'inactive'}) => {
  return <View style={getStyles({stepType}).step} />;
};

const Steps = ({currentStep, totalSteps}: Props) => {
  return (
    <View style={getStyles({}).stepContainer}>
      {Array.from({length: totalSteps}, (_, index) => (
        <Fragment key={index}>
          <Step stepType={typeOfStep(index, currentStep)} />
          <HorizontalSpacer width={8} />
        </Fragment>
      ))}
    </View>
  );
};

export default Steps;
