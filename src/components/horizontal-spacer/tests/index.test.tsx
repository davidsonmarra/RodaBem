import React from 'react';
import {create} from 'react-test-renderer';
import HorizontalSpacer from '..';

let mockWidth = 10;

const createComponent = () => create(<HorizontalSpacer width={mockWidth} />);

describe('HorizontalSpacer', () => {
  beforeEach(() => {
    mockWidth = 10;
  });

  it('renders correctly', () => {
    const tree = createComponent().toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with mockWidth correctly', () => {
    const instance = createComponent().root;
    expect(instance.props.width).toBe(mockWidth);
  });
});
