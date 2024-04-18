import React from 'react';
import {create} from 'react-test-renderer';
import {Input} from '@components';
import {signUpFormData} from '@mocks';
import Form, {Props} from '..';

const createComponent = (props: Props) => create(<Form {...props} />);

describe('Form', () => {
  it('renders correctly', () => {
    const tree = createComponent({
      data: signUpFormData,
      currentStep: 0,
      listRef: {current: {scrollToIndex: jest.fn()}} as any,
      setIsDisabled: jest.fn(),
    }).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render many inputs', () => {
    const instance = createComponent({
      data: signUpFormData,
      currentStep: 0,
      listRef: {current: {scrollToIndex: jest.fn()}} as any,
      setIsDisabled: jest.fn(),
    }).root;
    const inputs = instance.findAllByType(Input);
    expect(inputs).toHaveLength(signUpFormData.length);
  });
});
