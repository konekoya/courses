import React from 'react';
import preload from '../public/data.json';
import ShowCard from './ShowCard';

const Search = React.createClass({
  render() {
    return (
      <div className='search'>
        {
          preload.shows.map(show => {
            return (
              <ShowCard key={show.imdbID} {...show} />
            )
          })
        }
      </div>
    );
  }
})

export default Search;
