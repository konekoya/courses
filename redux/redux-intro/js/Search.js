import React from 'react';
import preload from '../public/data.json';

const Search = React.createClass({
  render() {
    return (
      <div className='search'>
        <pre>
          <code>
            {JSON.stringify(preload, null, 2)}
          </code>
        </pre>
      </div>
    );
  }
})

export default Search;
