import React, { Component } from 'react';
import Loading from '../../components/loading/Loading';
import ArticleList from '../../components/articles/ArticleList';
import Search from '../../components/articles/Search';
import { getArticles } from '../../services/news-api';

export default class AllArticles extends Component {
    state= {
      loading: false,
      articles: [],
      keyword:'blank'
    }

    handleKeywordChange = e => {
      this.setState({ keyword:e.target.value });
    }
    handleSubmit = e => {
      e.preventDefault();
      this.setState({ loading:true });

      getArticles(this.state.keyword)
        .then(articles => {
          this.setState({ articles });
        })
        .then(setTimeout(() => {
          this.setState({ loading: false });
        }, 2000));
        
    }


    render() {
      const { loading, articles, keyword } = this.state;
      if(loading) return <Loading/>;

      return (
        <>
          
          <Search 
            keyword={keyword} 
            onSubmit={this.handleSubmit}
            onChange={this.handleKeywordChange}/>  
          <ArticleList articles={articles}/>

          
        </>
      );
    }
}
