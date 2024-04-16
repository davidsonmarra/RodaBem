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
});
