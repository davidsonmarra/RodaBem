import React from 'react';
import {act, create} from 'react-test-renderer';
import useFormScroll from '..';
import {Text, TouchableOpacity} from 'react-native';

describe('useFormScroll', () => {
  it('should return the correct step', () => {
    const listRef = {current: {scrollToIndex: jest.fn()}} as any;
    const dataLength = 3;
    const component = create(
      <HookWrapper listRef={listRef} dataLength={dataLength} />,
    );
    const text = component.root.findAllByType(Text)[0];

    expect(text.props.children).toBe(0);

    act(() => {
      component.root
        .findByProps({'data-testid': 'scrollToNextStep'})
        .props.onPress();
    });
    expect(text.props.children).toBe(1);

    act(() => {
      component.root
        .findByProps({'data-testid': 'scrollToNextStep'})
        .props.onPress();
    });
    expect(text.props.children).toBe(2);
  });

  it('should update the step', () => {
    const listRef = {current: {scrollToIndex: jest.fn()}} as any;
    const dataLength = 3;
    const component = create(
      <HookWrapper listRef={listRef} dataLength={dataLength} />,
    );
    const text = component.root.findAllByType(Text)[0];
    act(() => {
      component.root
        .findByProps({'data-testid': 'scrollToNextStep'})
        .props.onPress();
    });
    expect(text.props.children).toBe(1);

    act(() => {
      component.root
        .findByProps({'data-testid': 'scrollToNextStep'})
        .props.onPress();
    });
    expect(text.props.children).toBe(2);

    act(() => {
      component.root
        .findByProps({'data-testid': 'scrollToBackStep'})
        .props.onPress();
    });
    expect(text.props.children).toBe(1);

    act(() => {
      component.root
        .findByProps({'data-testid': 'scrollToBackStep'})
        .props.onPress();
    });
    expect(text.props.children).toBe(0);
  });

  it('should verify if scroll is possible', () => {
    const listRef = {current: {scrollToIndex: jest.fn()}} as any;
    const dataLength = 3;
    const component = create(
      <HookWrapper listRef={listRef} dataLength={dataLength} />,
    );

    let isScrollPossible;
    act(() => {
      isScrollPossible = component.root
        .findByProps({'data-testid': 'verifyIfScrollIsPossible'})
        .props.onPress(-1);
    });
    expect(isScrollPossible).toBe(false);

    act(() => {
      isScrollPossible = component.root
        .findByProps({'data-testid': 'verifyIfScrollIsPossible'})
        .props.onPress(1);
    });
    expect(isScrollPossible).toBe(true);

    act(() => {
      isScrollPossible = component.root
        .findByProps({'data-testid': 'verifyIfScrollIsPossible'})
        .props.onPress(3);
    });
    expect(isScrollPossible).toBe(false);
  });
});

const HookWrapper = ({listRef, dataLength}: any) => {
  const hookResult = useFormScroll({listRef, dataLength});

  return (
    <TestComponent
      currentStep={hookResult.currentStep}
      scrollToNextStep={hookResult.scrollToNextStep}
      scrollToBackStep={hookResult.scrollToBackStep}
      verifyIfScrollIsPossible={hookResult.verifyIfScrollIsPossible}
    />
  );
};

const TestComponent = ({
  currentStep,
  scrollToNextStep,
  scrollToBackStep,
  verifyIfScrollIsPossible,
}: any) => {
  return (
    <>
      <Text>{currentStep}</Text>
      <TouchableOpacity
        onPress={scrollToNextStep}
        data-testid="scrollToNextStep"
      />
      <TouchableOpacity
        onPress={scrollToBackStep}
        data-testid="scrollToBackStep"
      />
      <TouchableOpacity
        onPress={offset => verifyIfScrollIsPossible(offset)}
        data-testid="verifyIfScrollIsPossible"
      />
    </>
  );
};
