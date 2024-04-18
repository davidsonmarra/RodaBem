import React from 'react';
import {create} from 'react-test-renderer';
import SignInContainer from '..';
import {Button, Input} from '@components';

const mockOnSubmit = jest.fn();
const mockErrors = undefined;
const mockClearErrors = jest.fn();
const mockOnSignUp = jest.fn();

const containerInstance = ({
  control,
  onSubmit = mockOnSubmit,
  errors = mockErrors,
  clearErrors = mockClearErrors,
  onSignUp = mockOnSignUp,
}: any) =>
  create(
    <SignInContainer
      control={control}
      onSubmit={onSubmit}
      errors={errors}
      clearErrors={clearErrors}
      onSignUp={onSignUp}
    />,
  );

describe('SignInContainer', () => {
  it('should render correctly', () => {
    const tree = containerInstance({}).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call onSubmit', () => {
    const instance = containerInstance({}).root;
    const buttonsInstance = instance.findAllByType(Button);
    buttonsInstance[1].props.onPress();
    expect(mockOnSubmit).toHaveBeenCalled();
  });

  it('should call onSignUp', () => {
    const instance = containerInstance({}).root;
    const buttonsInstance = instance.findAllByType(Button);
    buttonsInstance[2].props.onPress();
    expect(mockOnSignUp).toHaveBeenCalled();
  });

  it('should call clearErrors', () => {
    const instance = containerInstance({}).root;
    const inputsInstance = instance.findAllByType(Input);
    inputsInstance[0].props.clearError();
    inputsInstance[1].props.clearError();
    expect(mockClearErrors).toHaveBeenCalledTimes(2);
  });

  it('should render error messages', () => {
    const errors = {
      email: {
        message: 'Email is required',
      },
      password: {
        message: 'Password is required',
      },
    };
    const instance = containerInstance({errors}).root;
    const inputsInstance = instance.findAllByType(Input);
    expect(inputsInstance[0].props.error).toBe('Email is required');
    expect(inputsInstance[1].props.error).toBe('Password is required');
  });

  it('should not render error messages', () => {
    const instance = containerInstance({}).root;
    const inputsInstance = instance.findAllByType(Input);
    expect(inputsInstance[0].props.error).toBeUndefined();
    expect(inputsInstance[1].props.error).toBeUndefined();
  });
});
