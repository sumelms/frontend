import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import Button from './index';

describe('Button component', () => {
  afterEach(cleanup);

  it('should be able to render an button', () => {
    const { getByTestId } = render(<Button />);
    expect(getByTestId('button-element')).toBeTruthy();
  });

  it('should render correctly', () => {
    const { getByTestId } = render(<Button>Default button</Button>);
    expect(getByTestId('button-element')).toHaveTextContent('Default button');
  });

  it('should be clickable', (done) => {
    const { getByTestId } = render(<Button onClick={() => done()}>Click me</Button>);
    userEvent.click(getByTestId('button-element'));
  });
});
