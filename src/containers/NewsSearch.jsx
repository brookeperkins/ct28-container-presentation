import React, { Component } from 'react';
import AllArticles from '../components/articles/AllArticles';
import Search from '../components/search/Search';
import Loading from '../components/loading/Loading';
import { getHeadlines } from '../services/news-api';

export default class ArticleList extends Component {
  state = {
    articles: [],
    search: '',
    loading: true
  }

  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  }

  handleSearch = async() => {
    const articleArray = await getHeadlines(this.state.search);

    this.setState({ articles: articleArray, loading: false });
  }

  render() {
    const { articles, search, loading } = this.state;

    if(loading) return <>
      <Search
        search={search}
        onSubmit={this.handleSearch}
        onChange={this.handleChange}
      />
      <br />
      <Loading />
    </>;
    return (
      <>
        <Search
          search={search}
          onSubmit={this.handleSearch}
          onChange={this.handleChange}
        />
        <AllArticles
          articles={articles}
        />
      </>
    );
  }
}
