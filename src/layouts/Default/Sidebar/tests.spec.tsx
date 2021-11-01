import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './index';

describe('Sidebar component', () => {
  afterEach(cleanup);

  it('should be able to render an sidebar', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>,
    );
    expect(getByTestId('sidebar-element')).toBeTruthy();
  });

  it('should render correctly', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>,
    );
    expect(getByTestId('sidebar-element')).toHaveClass('sidebar');
  });
});
