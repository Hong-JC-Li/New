import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App renders the expected text', () => {
  const { getByText } = render(<App />);
   const text = getByText("I know React");
    expect(text).not.toBeFalsy();
});