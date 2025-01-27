/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import App from './App';


test('checks for "lobster" in the heading', async () => {
  // sets up App component in virtual DOM so it can be interacted with tested
  render(<App />);

  const heading = await screen.findByRole('heading');

  expect(heading).toHaveTextContent('lobster')
});

test('checks for "shell" in the heading', async () => {

  render(<App />);

  const heading = await screen.findByRole('paragraph');

 expect(heading).toHaveTextContent('discomfort')
});
