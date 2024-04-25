import React from 'react';
import {act, create} from 'react-test-renderer';
import HomeScreen from '..';
import HomeContainer from '../ui';
import {Card} from 'src/feature/home/components';
import {ButtonIcon} from '@components';

const mockNavigate = jest.fn();
const mockNavigation = {
  navigate: mockNavigate,
  goBack: jest.fn(),
};

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => mockNavigation,
}));

const getContainerInstance = ({props}: any) => {
  const instance = create(
    <HomeScreen navigation={mockNavigation} {...props} />,
  );
  return instance.root.findByType(HomeContainer);
};

describe('HomeScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render cards correctly', () => {
    const container = getContainerInstance({});
    const cards = container.findAllByType(Card);
    expect(cards).toHaveLength(9);
  });

  it('should navigate to card details when press card component', async () => {
    const container = getContainerInstance({});
    const card = container.findAllByType(Card)[0];
    await act(async () => {
      card.props.onPress();
    });
    expect(mockNavigate).toHaveBeenNthCalledWith(1, 'Test');
  });

  it('should navigate to add car when press add button', async () => {
    const container = getContainerInstance({});
    const addCardButton = container.findByType(ButtonIcon);
    await act(async () => {
      addCardButton.props.onPress();
    });
    expect(mockNavigate).toHaveBeenNthCalledWith(1, 'Test');
  });
});
