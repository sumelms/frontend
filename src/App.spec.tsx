import React from 'react';

import { render } from '@testing-library/react';
import App from './App';

let mockInitialized = false;
let mockKeycloakStub = 'mock-stub';

jest.mock('@react-keycloak/web', () => {
  const originalModule = jest.requireActual('@react-keycloak/web');
  return {
    ...originalModule,
    useKeycloak: () => [mockKeycloakStub, mockInitialized],
  };
});

describe('<App> component', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
});
