import React from 'react';

import App from './App';
import { render } from '@testing-library/react';

describe('<App> component', () => {

  it('renders without crashing', () => {
    render(<App />);
  });

});