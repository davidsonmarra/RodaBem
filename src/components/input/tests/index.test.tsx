import React from 'react';
import {create} from 'react-test-renderer';
import Input, {Props as InputProps} from '..';

let mockValue = '';
const mockOnChangeText = jest.fn((text: string) => {
  mockValue = text;
});

const createComponent = ({
  value = '',
  onChangeText = mockOnChangeText,
  ...rest
}: InputProps) =>
  create(<Input value={value} onChangeText={onChangeText} {...rest} />);

describe('Input', () => {
  const labelTestId = 'id-label-input-text';
  const errorTestId = 'id-error-input-text';

  beforeEach(() => {
    mockValue = '';
    mockOnChangeText.mockClear();
  });

  it('renders correctly', () => {
    const tree = createComponent({}).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should update the value when the user types', () => {
    const typedText = 'new value typed in the input';
    const instance = createComponent({}).root;
    instance.props.onChangeText(typedText);
    expect(mockValue).toBe(typedText);
  });

  it('should render input with the correct value for default value', () => {
    const value = 'default value';
    const instance = createComponent({value}).root;
    expect(instance.props.value).toBe(value);
  });

  it('should render input with the correct value for label prop', () => {
    const label = 'label';
    const instance = createComponent({label}).root;
    expect(instance.props.label).toBe(label);
  });

  it('should render input with the correct value for placeholder prop', () => {
    const placeholder = 'placeholder';
    const instance = createComponent({placeholder}).root;
    expect(instance.props.placeholder).toBe(placeholder);
  });

  it('should render label when label prop is passed', () => {
    const instance = createComponent({label: 'label'}).root;
    const label = instance.findByProps({testID: labelTestId});
    let error;
    try {
      error = instance.findByProps({testID: errorTestId});
    } catch (_) {
      expect(error).toBeFalsy();
    }
    expect(label).toBeTruthy();
  });

  it('should render error message when error prop is passed', () => {
    const instance = createComponent({error: 'error message'}).root;
    const error = instance.findByProps({testID: errorTestId});
    let label;
    try {
      label = instance.findByProps({testID: labelTestId});
    } catch (_) {
      expect(label).toBeFalsy();
    }
    expect(error).toBeTruthy();
  });

  it('should render input with label and error message when both props are passed', () => {
    const instance = createComponent({
      label: 'label',
      error: 'error message',
    }).root;
    const label = instance.findByProps({testID: labelTestId});
    const error = instance.findByProps({testID: errorTestId});
    expect(label).toBeTruthy();
    expect(error).toBeTruthy();
  });
});
