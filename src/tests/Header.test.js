import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/Header';

jest.mock('../components/Navbar', () => {
  const MockNavbar = () => <div data-testid="navbar-mock" />;
  MockNavbar.displayName = 'Navbar'; // Set the display name
  return MockNavbar;
});

describe('Header', () => {
  test('renders header title', () => {
    const { getByText } = render(<Header />);
    const headerTitle = getByText('Math Magicians');
    expect(headerTitle).toBeInTheDocument();
  });

  test('renders Navbar component', () => {
    const { getByTestId } = render(<Header />);
    const navbar = getByTestId('navbar-mock');
    expect(navbar).toBeInTheDocument();
  });
});
