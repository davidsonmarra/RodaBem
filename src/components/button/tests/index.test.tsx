import React from 'react';
import {create} from 'react-test-renderer';
import Button, {ButtonType, Props as ButtonProps} from '..';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import getStyles from '../styles';

type Props = Partial<ButtonProps> & {type?: string};

const mockText = 'Snapshot test!';
const createComponent = ({text = mockText, type, ...rest}: Props) =>
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
    const instance = createComponent({type: ButtonType.primary}).root;
    expect(instance.props.type).toEqual(ButtonType.primary);
  });

  it('renders secondary style correctly', () => {
    const instance = createComponent({type: ButtonType.secondary}).root;
    expect(instance.props.type).toEqual(ButtonType.secondary);
  });

  it('renders primary style correctly when does not have prop type', () => {
    const instance = createComponent({type: undefined}).root;
    const touchable = instance.findByType(TouchableOpacity);
    expect(touchable.props.style).toEqual([
      getStyles({isDisabled: false}).container,
      getStyles({isDisabled: false}).primary,
    ]);
  });

  it('renders disabled style correctly when isDisabled prop is true', () => {
    const instance = createComponent({isDisabled: true}).root;
    const touchable = instance.findByType(TouchableOpacity);
    expect(touchable.props.style).toEqual([
      getStyles({isDisabled: true}).container,
      getStyles({isDisabled: true}).primary,
    ]);
  });

  it('renders loading correctly', () => {
    const instance = createComponent({isLoading: true}).root;
    const activityIndicator = instance.findByType(ActivityIndicator);
    expect(activityIndicator).toBeTruthy();
  });
});
