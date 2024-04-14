import React from 'react';
import {create} from 'react-test-renderer';
import Button, {ButtonType} from '..';

const mockText = 'Snapshot test!';
const createComponent = ({
  text = mockText,
  type = ButtonType.primary,
  ...rest
}) =>
  create(
    <Button text={text} type={type} {...rest}>
      {mockText}
    </Button>,
  );

describe('Button', () => {
  it('renders correctly', () => {
    const tree = createComponent({}).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders children correctly', () => {
    const instance = createComponent({}).root;
    expect(instance.props.children).toBe(mockText);
  });

  it('should call onPress', () => {
    const onPress = jest.fn();
    const instance = createComponent({onPress}).root;
    instance.props.onPress();
    expect(onPress).toHaveBeenCalled();
  });

  it('renders primary style correctly', () => {
    const instance = createComponent({}).root;
    expect(instance.props.type).toEqual(ButtonType.primary);
  });

  it('renders secondary style correctly', () => {
    const instance = createComponent({type: ButtonType.secondary}).root;
    expect(instance.props.type).toEqual(ButtonType.secondary);
  });
});
