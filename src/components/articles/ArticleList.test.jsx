import React from 'react';
import { render, cleanup } from '@testing-library/react'
import ArticleList from './ArticleList';

describe('Article component', () => {
    afterEach(() => cleanup());
    it('renders Article', () => {
        const { asFragment } = render(<ArticleList
            articles={[
                { title:"Test Title", author:"Test Author", description:"Test Description" }
            ]}
            />);
        expect(asFragment()).toMatchSnapshot()
    });
});