import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Logo from './index';

describe('Logo component', () => {
  afterEach(cleanup);

  it('should be able to render an logo', () => {
    const { getByTestId } = render(<Logo />);
    expect(getByTestId('logo-element')).toBeTruthy();
  });

  it('should render correctly', () => {
    const { getByTestId } = render(<Logo />);
    expect(getByTestId('logo-element')).toHaveClass('w-full');
  });
});
