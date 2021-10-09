import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Sidebar from './index';

describe('Sidebar component', () => {
  afterEach(cleanup);

  it('should be able to render an sidebar', () => {
    const { getByTestId } = render(<Sidebar />);
    expect(getByTestId('sidebar-element')).toBeTruthy();
  });

  it('should render correctly', () => {
    const { getByTestId } = render(<Sidebar />);
    expect(getByTestId('sidebar-element')).toHaveClass('sidebar');
  });
});
