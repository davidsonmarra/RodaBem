import React from 'react';
import {create} from 'react-test-renderer';
import Header, {Props} from '..';
import {Text} from '@components';
import {TouchableOpacity} from 'react-native';

const mockText = 'Snapshot test!';
const createComponent = ({text = mockText, onBack}: Props) =>
  create(<Header text={text} onBack={onBack} />);

const mockGoBack = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({goBack: mockGoBack}),
}));

describe('Button', () => {
  it('renders correctly', () => {
    const tree = createComponent({}).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders text correctly', () => {
    const instance = createComponent({}).root;
    expect(instance.findByType(Text)).toBeTruthy();
  });

  it('should call goBack', () => {
    const instance = createComponent({onBack: mockGoBack}).root;
    instance.props.onBack();
    expect(mockGoBack).toHaveBeenCalled();
  });

  it('should call onBack when press back icon', () => {
    const instance = createComponent({onBack: mockGoBack}).root;
    const backIcon = instance.findAllByType(TouchableOpacity)[0];
    backIcon.props.onPress();
    expect(mockGoBack).toHaveBeenCalled();
  });
});
