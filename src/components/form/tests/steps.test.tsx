import React from 'react';
import {create} from 'react-test-renderer';
import Steps, {Step, Props} from '../steps';

const createComponent = ({...rest}: Props) => create(<Steps {...rest} />);

describe('Steps', () => {
  it('renders correctly', () => {
    const tree = createComponent({
      currentStep: 0,
      totalSteps: 3,
    }).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders number of steps correctly', () => {
    const instance = createComponent({
      currentStep: 0,
      totalSteps: 3,
    }).root;
    expect(instance.findAllByType(Step).length).toBe(3);
  });

  it('renders active step correctly', () => {
    const instance = createComponent({
      currentStep: 1,
      totalSteps: 3,
    }).root;
    const steps = instance.findAllByType(Step);
    expect(steps[0].props.stepType).toBe('active');
    expect(steps[1].props.stepType).toBe('active');
    expect(steps[2].props.stepType).toBe('inactive');
  });

  it('renders no inactive step correctly', () => {
    const instance = createComponent({
      currentStep: 2,
      totalSteps: 3,
    }).root;
    const steps = instance.findAllByType(Step);
    expect(steps[0].props.stepType).toBe('active');
    expect(steps[1].props.stepType).toBe('active');
    expect(steps[2].props.stepType).toBe('active');
  });
});
