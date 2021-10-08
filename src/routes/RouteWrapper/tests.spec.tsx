import React from 'react';
import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import RouteWrapper from './index';

describe('RouteWrapper component', () => {
  it('renders without crashing', () => {
    const props = {
      component: () => <h1>Component</h1>,
      name: 'test',
      path: '/',
    };
    render(
      <MemoryRouter>
        <RouteWrapper {...props} />
      </MemoryRouter>,
    );
  });
});
