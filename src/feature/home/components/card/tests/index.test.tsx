import React from 'react';
import {act, create} from 'react-test-renderer';
import Card from '..';
import {TouchableOpacity} from 'react-native';

const mockData = {
  name: 'Name',
  brand: 'Brand',
  kmDriven: '100',
  kmPerLiter: '10',
};

const createComponent = ({data = mockData, onPress = jest.fn(), ...rest}) =>
  create(<Card onPress={onPress} data={data} {...rest} />);

describe('Card', () => {
  it('renders correctly', () => {
    const component = createComponent({});
    expect(component).toMatchSnapshot();
  });

  it('should renders name', () => {
    const component = createComponent({});
    const title = component.root.findByProps({children: 'Name'});
    expect(title).toBeTruthy();
  });

  it('should renders brand', () => {
    const component = createComponent({});
    const description = component.root.findByProps({children: 'Brand'});
    expect(description).toBeTruthy();
  });

  it('should renders kmDriven', () => {
    const component = createComponent({});
    const kmDriven = component.root.findByProps({children: '100 Km rodados'});
    expect(kmDriven).toBeTruthy();
  });

  it('should renders kmPerLiter', () => {
    const component = createComponent({});
    const kmPerLiter = component.root.findByProps({children: '100 Km/L'});
    expect(kmPerLiter).toBeTruthy();
  });

  it('should call onPress when press card', () => {
    const onPress = jest.fn();
    const component = createComponent({onPress}).root;
    const buton = component.findByType(TouchableOpacity);

    act(() => {
      buton.props.onPress();
    });

    expect(onPress).toHaveBeenNthCalledWith(1, mockData);
  });
});
