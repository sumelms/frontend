import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Card from './index';

describe('Card component', () => {
  afterEach(cleanup);

  it('should be able to render a card', () => {
    const args = {
      title: 'card title',
      description: 'card description',
      isLink: false,
    };
    const { getByTestId } = render(<Card {...args} />);
    expect(getByTestId('card-element')).toBeTruthy();
  });
});
