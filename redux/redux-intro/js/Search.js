import React from 'react';
import { connect } from 'react-redux';
import ShowCard from './ShowCard';
import Header from './Header';

const { arrayOf, shape, string } = React.PropTypes;
const Search = React.createClass({
  propTypes: {
    shows: arrayOf(
      shape({
        title: string,
        description: string,
        description: string
      }),
    ),
    searchTerm: string
  },
  render() {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input
            onChange={this.handleSearchTermChange}
            value={this.props.searchTerm}
            type="text"
            placeholder="Search"
          />
          <Header showSearch />
        </header>
        <div>
          {this.props.shows
            .filter(show => {
              return (
                `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(this.props.searchTerm.toUpperCase()) >= 0
              );
            })
            .map(show => {
              return <ShowCard key={show.imdbID} {...show} />;
            })}
        </div>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm
  };
}
export default connect(mapStateToProps)(Search);
