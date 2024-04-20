import React from 'react';
import {act, create} from 'react-test-renderer';
import SignUpScreen from '..';
import SignUpContainer from '../ui';
import {TouchableOpacity} from 'react-native';

const mockGoBack = jest.fn();
const mockNavigation = {
  goBack: mockGoBack,
};

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({goBack: mockGoBack}),
}));

const mockScrollToBackStep = jest.fn();
const mockVerifyIfScrollIsPossible = jest.fn();
jest.mock('src/feature/login/hooks', () => ({
  useFormScroll: () => ({
    currentStep: 0,
    scrollToBackStep: mockScrollToBackStep,
    scrollToNextStep: jest.fn(),
    verifyIfScrollIsPossible:
      mockVerifyIfScrollIsPossible.mockReturnValue(false),
  }),
}));

const getContainerInstance = ({
  navigation = mockNavigation,
  defaultValues,
  ...rest
}: any) => {
  const instance = create(
    <SignUpScreen
      navigation={navigation}
      defaultValues={defaultValues}
      {...rest}
    />,
  );
  return instance.root.findByType(SignUpContainer);
};

describe('SignUpScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call onBack when press goBackButton', async () => {
    const container = getContainerInstance({});

    const backButton = container.findAllByType(TouchableOpacity)[0];

    await act(async () => {
      backButton.props.onPress();
    });
    expect(mockGoBack).toHaveBeenCalledTimes(1);
    expect(mockScrollToBackStep).toHaveBeenCalledTimes(0);
  });

  it('should back state when press goBackButton', async () => {
    mockVerifyIfScrollIsPossible.mockReturnValueOnce(true);

    const container = getContainerInstance({});

    const backButton = container.findAllByType(TouchableOpacity)[0];

    await act(async () => {
      backButton.props.onPress();
    });
    expect(mockScrollToBackStep).toHaveBeenCalledTimes(1);
    expect(mockGoBack).toHaveBeenCalledTimes(0);
  });

  it('should call onSubmit and go to next step when press submitButton', async () => {
    const mockScrollToNextStep = jest.fn();
    const useFormScrollSpy = jest.spyOn(
      require('src/feature/login/hooks'),
      'useFormScroll',
    );
    useFormScrollSpy.mockReturnValue({
      currentStep: 0,
      scrollToNextStep: mockScrollToNextStep,
      scrollToBackStep: jest.fn(),
      verifyIfScrollIsPossible: jest.fn(),
    });
    const container = getContainerInstance({});

    const submitButton = container.findAllByType(TouchableOpacity)[1];

    await act(async () => {
      submitButton.props.onPress();
    });

    expect(mockScrollToNextStep).toHaveBeenCalledTimes(1);
  });

  it('should call onSubmit and submit form when press submitButton', async () => {
    const mockScrollToNextStep = jest.fn();
    const useFormScrollSpy = jest.spyOn(
      require('src/feature/login/hooks'),
      'useFormScroll',
    );
    useFormScrollSpy.mockReturnValue({
      currentStep: 3,
      scrollToNextStep: mockScrollToNextStep,
      scrollToBackStep: jest.fn(),
      verifyIfScrollIsPossible: jest.fn(),
    });
    const mockDefaultValues = {
      name: 'LeBron James',
      email: 'lebron@gmail.com',
      password: '1234567',
      confirmPassword: '1234567',
    };

    const container = getContainerInstance({
      defaultValues: {...mockDefaultValues},
    });

    const submitButton = container.findAllByType(TouchableOpacity)[1];

    expect(container.props.isLoading).toBeFalsy();
    await act(async () => {
      submitButton.props.onPress();
    });
    expect(container.props.isLoading).toBeTruthy();
  });
});
