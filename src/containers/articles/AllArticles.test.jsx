import React from 'react';
import { render, screen } from '@testing-library/react';
import AllArticles from './AllArticles';

describe('AllArticles container', () => {
  it('renders AllArticles', () => {
    render(<AllArticles />);

    screen.getByTestId('form id');
  });

  it('displays a list of articles', () => {
    render(<AllArticles />);

    // const articleList = screen.getByTestId('articles');
  });
});
