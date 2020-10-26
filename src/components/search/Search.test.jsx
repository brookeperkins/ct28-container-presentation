import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Search from './Search';

describe('Search component', () => {
  afterEach(() => cleanup());
  const testSearch = function() {};

  it('renders the Search component', () => {
    const { asFragment } = render(<Search
      search="Test"
      onSubmit={testSearch}
      onChange={testSearch}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
