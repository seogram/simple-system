import React from 'react';
import { render } from '@testing-library/react';
import Error from './Error';

describe('Error component', () => {
  it('renders without crashing', () => {
    render(<Error />);
  });

  it('displays the error message', () => {
    const { getByText } = render(<Error />);
    expect(getByText(/Something went wrong.../i)).toBeInTheDocument();
  });

  it('applies the correct color', () => {
    const { getByText } = render(<Error />);
    const errorMessage = getByText(/Something went wrong.../i);
    expect(errorMessage).toHaveStyle('color: rgb(211, 47, 47)');
  });
});