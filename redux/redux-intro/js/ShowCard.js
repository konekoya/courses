import React from 'react';
import { Link } from 'react-router';

const { shape, string } = React.PropTypes;
const ShowCard = React.createClass({
  propTypes : {
    show: shape({
      poster: string,
      title: string,
      year: string,
      description: string,
      imdbID: string
    })
  },
  render() {
    const { title, year, description, poster, imdbID } = this.props;

    return (
      <Link to={ `/details/${imdbID}` }>
        <div className='show-card'>
          <img src={`/public/img/posters/${poster}`} />
          <div>
            <h3>{title}</h3>
            <h4>({year})</h4>
            <p>{description}</p>
          </div>
        </div>
    </Link>
    )
  }
})

export default ShowCard
