import React from 'react';
import PropTypes from 'prop-types';

import ArticleList from './ArticleList';

export default class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object,
  };

  getChildContext() {
    return {
      store: this.props.store,
    };
  }

  state = this.props.store.getState();

  render() {
    return (
      <ArticleList articles={this.state.articles} store={this.props.store} />
    );
  }
}
