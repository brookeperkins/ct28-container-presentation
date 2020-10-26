import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Article from './Article';

describe('Article component', () => {
  afterEach(() => cleanup());
  it('renders Article', () => {
    const { asFragment } = render(<Article
      title="Check out this TITLE"
      author="Ida B. Wells"
      description="This is a description of some sort."
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
