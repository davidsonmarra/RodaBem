import React from 'react';
import {act, create} from 'react-test-renderer';
import SignInScreen from '..';
import SignInContainer from '../ui';
import {Button, Input} from '@components';

const mockHandleSubmit = jest.fn();
const mockClearErrors = jest.fn();
jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  Controller: () => <></>,
  useForm: () => ({
    control: () => ({}),
    formState: {errors: {}},
    handleSubmit: () => mockHandleSubmit,
    clearErrors: mockClearErrors,
  }),
}));

const mockNavigate = jest.fn();
const mockNavigation = {
  navigate: mockNavigate,
};

const getContainerInstance = ({props}: any) => {
  const instance = create(<SignInScreen {...props} />);
  return instance.root.findByType(SignInContainer);
};

describe('SignInScreen', () => {
  it('should call onSubmit when the form is submitted', async () => {
    const container = getContainerInstance({});

    await act(async () => {
      await container.props.onSubmit();
    });

    expect(mockHandleSubmit).toHaveBeenCalled();
  });

  it('should call clearErrors when the input is cleared', async () => {
    const container = getContainerInstance({});
    const inputsInstance = container.findAllByType(Input);

    await act(async () => {
      await inputsInstance[0].props.clearError();
      await inputsInstance[1].props.clearError();
    });

    expect(mockClearErrors).toHaveBeenCalledWith('email');
    expect(mockClearErrors).toHaveBeenCalledWith('password');
    expect(mockClearErrors).toHaveBeenCalledTimes(2);
  });

  it('should navigate to SignUp when the button is pressed', async () => {
    const container = getContainerInstance({
      props: {navigation: mockNavigation},
    });
    const buttonInstance = container.findAllByType(Button);

    await act(async () => {
      await buttonInstance[2].props.onPress();
    });

    expect(mockNavigate).toHaveBeenCalledWith('SignUp');
  });
});
