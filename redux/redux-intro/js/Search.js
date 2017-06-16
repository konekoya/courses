import React from 'react';
import preload from '../public/data.json';
import ShowCard from './ShowCard';

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },

  handleSearchTermChange (event) {
    this.setState({ searchTerm: event.target.value });
  },

  render() {
    return (
      <div className='search'>
        <header>
          <h1>svideo</h1>
          <input onChange={ this.handleSearchTermChange } value={ this.state.searchTerm } type='text' placeholder='Search' />
        </header>
        <div>
          {
            preload.shows
              .filter((show) => {
                return `${show.title} ${show.description}`
                .toUpperCase()
                .indexOf(this.state.searchTerm.toUpperCase()) >= 0
              })
              .map(show => {
                return (
                  <ShowCard key={show.imdbID} {...show} />
                )
            })
          }
        </div>
      </div>
    );
  }
})

export default Search;
