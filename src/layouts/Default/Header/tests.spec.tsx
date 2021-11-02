import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './index';

jest.mock('@react-keycloak/web');

describe('Header component', () => {
  afterEach(cleanup);

  it('should be able to render an header', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(getByTestId('header-element')).toBeTruthy();
  });

  it('should render correctly', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(getByTestId('header-element')).toHaveClass('header');
  });
});
