import React from 'react';
import { render, cleanup } from '@testing-library/react';
import AllArticles from './AllArticles';
/* eslint-disable max-len */

const newsArray = [
  { title: 'This Title', author: 'Lil Wayne', description: 'What a fabulous article.' },
  { title: 'That Title', author: 'Margaret Atwood', description: 'Stupendous article.' },
  { title: 'Those Titles', author: 'Norman Mailer', description: 'Eh.' }
];

describe('AllArticles component', () => {
  afterEach(() => cleanup());
  it('render AllArticles component', () => {
    const { asFragment } = render(<AllArticles
      articles={newsArray}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
