import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from './index';

describe('Header component', () => {
  afterEach(cleanup);

  it('should be able to render an header', () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('header-element')).toBeTruthy();
  });

  it('should render correctly', () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('header-element')).toHaveClass('header');
  });
});
