import React, {useState} from 'react';
import {FlatList} from 'react-native';

interface Props {
  listRef: React.RefObject<FlatList>;
  dataLength: number;
}

const useFormScroll = ({listRef, dataLength}: Props) => {
  const [currentStep, setCurrentStep] = useState(0);

  const scrollToNextStep = () => {
    listRef?.current?.scrollToIndex({
      animated: true,
      index: currentStep + 1,
    });
    setCurrentStep(currentStep + 1);
  };

  const scrollToBackStep = () => {
    listRef?.current?.scrollToIndex({
      animated: true,
      index: currentStep - 1,
    });
    setCurrentStep(currentStep - 1);
  };

  const verifyIfScrollIsPossible = (offset: number) => {
    if (currentStep + offset < 0 || currentStep + offset > dataLength - 1) {
      return false;
    }
    return true;
  };

  return {
    currentStep,
    scrollToNextStep,
    scrollToBackStep,
    verifyIfScrollIsPossible,
  };
};

export default useFormScroll;
