import React from 'react';
import {create} from 'react-test-renderer';
import VerticalSpacer from '..';

let mockHeight = 10;

const createComponent = () => create(<VerticalSpacer height={mockHeight} />);

describe('VerticalSpacer', () => {
  beforeEach(() => {
    mockHeight = 10;
  });

  it('renders correctly', () => {
    const tree = createComponent().toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with height correctly', () => {
    const instance = createComponent().root;
    expect(instance.props.height).toBe(mockHeight);
  });
});
