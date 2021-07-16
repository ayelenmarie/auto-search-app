import { fireEvent, render, screen } from '@testing-library/react';

import { SearchBar } from './SearchBar';

beforeEach(() => render(<SearchBar />));

const setup = () => {
  const input = screen.getByLabelText('search-input');
  return {
    input,
    ...screen,
  };
};

describe('SearchBar', () => {
  it('Should have Logo', () => {
    expect(screen.getByAltText('Mac Cosmetics Logo')).toBeInTheDocument();
  });

  it('Should have placeholder text', () => {
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
  });

  it('Should write on input', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { inputValue: 'test' } });
    expect(input.inputValue).toBe('test');
  });
});
