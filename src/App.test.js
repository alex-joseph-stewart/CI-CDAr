/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import App from './App';


test('checks for "continuous integration" in the heading', async () => {
  // ARRANGE
  render(<App />);

  // ACT
  const heading = await screen.findByRole('heading');

  // ASSERT
  // https://testing-library.com/docs/dom-testing-library/cheatsheet#text-match-options
  expect(heading).toHaveTextContent('continuous integration')
});

test('checks for "continuous deployment" in the heading', async () => {
  // ARRANGE
  render(<App />);

  const heading = await screen.findByRole('heading');

 expect(heading).toHaveTextContent('continuous deployment')
});
