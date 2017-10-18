import React from 'react';
import debounce from 'lodash.debounce';

class SearchBar extends React.Component {
  state = {
    searchTerm: '',
  };

  doSearch = debounce(() => {
    console.log(this.state.searchTerm);
    this.props.doSearch(this.state.searchTerm);
  }, 300);

  handleSearch = e => {
    this.setState({ searchTerm: e.target.value }, () => {
      this.doSearch();
    });
  };

  render() {
    return (
      <input
        value={this.state.searchTerm}
        type="search"
        placeholder="Enter search term"
        onChange={this.handleSearch}
      />
    );
  }
}

export default SearchBar;
