import React from 'react';

import DataApi from '../DataApi';
import { data } from '../testData';

import ArticleList from './ArticleList';

const api = new DataApi(data);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors(),
    };
  }

  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId],
  };

  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        articleActions={this.articleActions}
      />
    );
  }
}
