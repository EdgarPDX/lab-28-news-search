import React from 'react';
import { render, screen } from '@testing-library/react';
import AllArticles from './AllArticles';

describe('AllArticles container', () => {
  it('renders AllArticles', () => {
    render(<AllArticles />);

    screen.getByAltText('Loading gif');
  });

  it('displays a list of articles', () => {
    render(<AllArticles />);

    // const articleList = screen.getByTestId('articles');
  });
});
