import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

/**
 * @description Tests if Header has main navigation and logo
 */
describe('Header', () => {
  it('renders a menu', () => {
    render(<Header />);
    const heading = screen.getByRole('navigation');
    expect(heading).toBeInTheDocument();
  });

  it('renders a logo next image', () => {
    render(<Header />);
    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeInTheDocument();
  });
});
