import React from 'react';
import {create} from 'react-test-renderer';
import {ButtonIcon} from '@components';
import HomeContainer from '..';
import {Card} from 'src/feature/home/components';

const mockOnAddCarPress = jest.fn();
const mockOnCardPress = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
    goBack: jest.fn(),
  }),
}));

const containerInstance = ({
  onAddCarPress = mockOnAddCarPress,
  onCardPress = mockOnCardPress,
}: any) =>
  create(
    <HomeContainer onAddCarPress={onAddCarPress} onCardPress={onCardPress} />,
  );

describe('SignInContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const tree = containerInstance({}).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call onAddCarPress', () => {
    const instance = containerInstance({}).root;
    const buttonsInstance = instance.findAllByType(ButtonIcon);
    buttonsInstance[0].props.onPress();
    expect(mockOnAddCarPress).toHaveBeenCalledTimes(1);
  });

  it('should call onCardPress', () => {
    const instance = containerInstance({}).root;
    const buttonsInstance = instance.findAllByType(Card);
    buttonsInstance[0].props.onPress();
    expect(mockOnCardPress).toHaveBeenCalledTimes(1);
  });
});
