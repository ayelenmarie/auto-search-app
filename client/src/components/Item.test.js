import { render, screen } from '@testing-library/react';

import { Item } from './Item';

const ItemContent = {
  _id: '018',
  isActive: 'true',
  price: '20.00',
  picture: '/img/products/N16401_430.png',
  name: 'Damage Reverse Thickening Shampoo',
  about:
    'Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.',
  tags: ['ojon', 'shampoo'],
};

beforeEach(() => render(<Item item={ItemContent} />));

describe('Item', () => {
  it('Should have Title', () => {
    expect(
      screen.getByText('Damage Reverse Thickening Shampoo')
    ).toBeInTheDocument();
  });

  it('Should have Price', () => {
    expect(screen.getByTestId('Price')).toHaveTextContent('$ 20.00');
  });

  it('Should have an item picture', () => {
    expect(
      screen.getByAltText('Damage Reverse Thickening Shampoo')
    ).toBeInTheDocument();
  });
});
