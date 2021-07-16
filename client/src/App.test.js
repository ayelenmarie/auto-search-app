import { render, fireEvent, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import App from './App';

jest.mock('axios');

beforeEach(() =>
  act(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  })
);

describe('App', () => {
  test('Should type into input and display search results', async () => {
    // Find input
    const input = screen.queryByLabelText('search-input');

    // Define our search string
    const searchString = 'shampoo';

    // Writes search string into input
    fireEvent.change(input, { target: { inputValue: searchString } });

    // Check our input value is the searched string
    expect(input.inputValue).toBe(searchString);

    // Check if mocked was triggered
    expect(axios.get).toHaveBeenCalled();
  });
});
