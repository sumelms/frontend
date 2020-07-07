import React from 'react';
import { render } from '@testing-library/react';

import Button from './index';

describe('Button component', () => {

  it('renders without crashing', () => {
    render(<Button>Default button</Button>);
  });

});