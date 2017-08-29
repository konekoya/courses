import React from 'react';
import ArticleList from './ArticleList';

export default class App extends React.Component {
  state = this.props.store.getState();

  render() {
    return (
      <ArticleList articles={this.state.articles} store={this.props.store} />
    );
  }
}
