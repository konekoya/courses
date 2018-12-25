import React from 'react';
import Header from './Header';
import Meta from './Meta';

class Page extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Meta />
        {this.props.children}
      </div>
    );
  }
}

export default Page;
