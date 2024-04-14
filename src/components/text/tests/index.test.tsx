import React from 'react';
import {create} from 'react-test-renderer';
import Text, {TextType} from '..';

const mockText = 'Snapshot test!';
const createComponent = (type: TextType = TextType.title) =>
  create(<Text type={type}>{mockText}</Text>);

describe('Text', () => {
  it('renders correctly', () => {
    const tree = createComponent().toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders children correctly', () => {
    const instance = createComponent().root;
    expect(instance.props.children).toBe(mockText);
  });

  it('renders title style correctly', () => {
    const instance = createComponent().root;
    expect(instance.props.type).toEqual(TextType.title);
  });

  it('renders text style correctly', () => {
    const instance = createComponent(TextType.text).root;
    expect(instance.props.type).toEqual(TextType.text);
  });

  it('renders textBold style correctly', () => {
    const instance = createComponent(TextType.textBold).root;
    expect(instance.props.type).toEqual(TextType.textBold);
  });

  it('renders buttonPrimary style correctly', () => {
    const instance = createComponent(TextType.buttonPrimary).root;
    expect(instance.props.type).toEqual(TextType.buttonPrimary);
  });

  it('renders buttonSecondary style correctly', () => {
    const instance = createComponent(TextType.buttonSecondary).root;
    expect(instance.props.type).toEqual(TextType.buttonSecondary);
  });
});
