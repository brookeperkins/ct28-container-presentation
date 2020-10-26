import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NewsSearch from './NewsSearch';
import { getHeadlines } from '../services/news-api';
/* eslint-disable max-len */

jest.mock('../services/news-api');

describe('NewsSearch container', () => {
  it('displays a list of articles upon search', async () => {
    getHeadlines.mockResolvedValue([
      { title: 'Sometimes I Run, Sometimes I Hide', author: 'Britney Spears', description: 'but all I really want is to hold you tight/treat you right/be with you day and NIGHT.' },
      { title: 'You Used To Call Me On My Cellphone', author: 'Drake', description: 'but now you don\'t and I cry alone about it.' },
      { title: 'Do You Believe in Life After Love?', author: 'Cher', description: 'Well, do you?' }
    ]);

    render(<NewsSearch />);

    const button = screen.getByTestId('button');

    await fireEvent.click(button);

    const articleList = await screen.findByTestId('articles');

    expect(articleList).not.toBeEmptyDOMElement();
  });
});
