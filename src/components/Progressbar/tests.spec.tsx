import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Progressbar from './index';

describe('Progressbar component', () => {
  afterEach(cleanup);

  it('should be able to render an progressbar', () => {
    const args = {
      amount: 46,
      bgColorClass: 'bg-red-500',
    };
    const { getByTestId } = render(<Progressbar {...args} />);
    expect(getByTestId('progressbar-element')).toBeTruthy();
  });
});
