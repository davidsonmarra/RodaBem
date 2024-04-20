import React from 'react';
import {create} from 'react-test-renderer';
import {AddIcon} from '@assets';
import ButtonIcon from '..';

const createComponent = ({onPress = jest.fn(), children = <AddIcon />}) =>
  create(<ButtonIcon onPress={onPress}>{children}</ButtonIcon>);

describe('Button', () => {
  it('renders correctly', () => {
    const tree = createComponent({}).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders children correctly', () => {
    const instance = createComponent({}).root;
    expect(instance.props.children).toStrictEqual(<AddIcon />);
  });

  it('should call onPress', () => {
    const mockOnPress = jest.fn();
    const instance = createComponent({onPress: mockOnPress}).root;
    instance.props.onPress();
    expect(mockOnPress).toHaveBeenCalled();
  });
});
