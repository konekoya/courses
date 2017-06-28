import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { setSearchTerm } from './actionCreators';
const { string, func, object } = React.PropTypes;

const Landing = React.createClass({
  contextTypes: {
    router: object
  },
  PropTypes: {
    searchTerm: string,
    dispatch: func
  },
  handleSearchTermChange(event) {
    this.props.dispatch(setSearchTerm(event.target.value));
  },
  handleSearchSubmit(event) {
    event.preventDefault();
    this.context.router.transitionTo('/search');
  },
  render() {
    return (
      <div className="landing">
        <h1>svideo</h1>
        <form onSubmit={this.handleSearchSubmit}>
          <input
            onChange={this.handleSearchTermChange}
            type="text"
            placeholder="Search"
            value={this.props.searchTerm}
          />
        </form>
        <Link to="/search">or Browse All</Link>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm
  };
}

export default connect(mapStateToProps)(Landing);
