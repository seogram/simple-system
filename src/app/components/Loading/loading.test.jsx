import React from 'react';
import { render } from '@testing-library/react';
import Loading from './Loading';

describe('Loading component', () => {
  it('renders without crashing', () => {
    render(<Loading />);
  });

  it('displays the Loading message', () => {
    const { getByText } = render(<Loading />);
    const loadingText = getByText("Loading...");
    expect(loadingText).toBeInTheDocument();
  });

 
});