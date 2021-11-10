import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Card from './index';

describe('Card component', () => {
  afterEach(cleanup);

  it('should be able to render a empty card', () => {
    const { getByTestId } = render(<Card />);
    expect(getByTestId('card-element')).toBeTruthy();
  });

  it('should be able to render a simple card', () => {
    const { getByTestId } = render(
      <Card
        title="Hello card"
        description="This is not a description, this is just a tribute"
      />,
    );
    expect(getByTestId('card-element')).toBeTruthy();
  });
  it('should be able to render a complex card', () => {
    const { getByTestId } = render(
      <Card title="Hello card">
        <div className="text-red-400">
          <h2>It can be anything that you want</h2>
        </div>
        <button onClick={() => console.log('hello')}>Click me</button>
      </Card>,
    );
    expect(getByTestId('card-element')).toBeTruthy();
  });
});
