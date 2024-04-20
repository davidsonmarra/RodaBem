import React from 'react';
import {TouchableOpacity} from 'react-native';
import {act, create} from 'react-test-renderer';
import SignUpContainer from '..';
import {Button} from '@components';
import {signUpDataForm} from 'src/feature/login/utils';

const mockGoBack = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({goBack: mockGoBack}),
}));

const mockOnSubmit = jest.fn();
const containerInstance = ({
  control,
  onSubmit = mockOnSubmit,
  currentStep = 0,
  listRef = jest.fn(),
}: any) =>
  create(
    <SignUpContainer
      control={control}
      onSubmit={onSubmit}
      currentStep={currentStep}
      data={signUpDataForm}
      onBack={mockGoBack}
      listRef={listRef}
      isLoading={false}
      isDisabled={false}
      setIsDisabled={jest.fn()}
    />,
  );

describe('SignUpContainer', () => {
  it('should render correctly', () => {
    const tree = containerInstance({}).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should goBack', () => {
    const instance = containerInstance({}).root;
    const backButton = instance.findAllByType(TouchableOpacity)[0];

    act(() => {
      backButton.props.onPress();
    });
    expect(mockGoBack).toHaveBeenCalledTimes(1);
  });

  it('should call onSubmit', () => {
    const instance = containerInstance({}).root;
    const button = instance.findByType(Button);

    act(() => {
      button.props.onPress();
    });
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });
});
