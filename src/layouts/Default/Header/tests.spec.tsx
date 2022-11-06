import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './index';

jest.mock('@react-keycloak/web');

//@TODO: refactor tests
describe('Header component', () => {
  afterEach(cleanup);

  it.skip('should be able to render an header', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(getByTestId('header-element')).toBeTruthy();
  });

  it.skip('should render correctly', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(getByTestId('header-element')).toHaveClass('header');
  });
});
