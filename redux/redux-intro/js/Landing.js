import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router';
const { string } = React.PropTypes;

const Landing = React.createClass({
  PropTypes: {
    searchTerm: string
  },
  render() {
    return (
      <div className='landing'>
        <h1>svideo</h1>
        <input type='text' placeholder='Search' value={ this.props.searchTerm } />
        <Link to='/search'>or Browse All</Link>
      </div>
    )
  }
})

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm
  };
}

export default connect(mapStateToProps)(Landing)
