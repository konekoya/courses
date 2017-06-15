import React from 'react';
const { shape, string } = React.PropTypes;

const ShowCard = React.createClass({
  propTypes : {
    show: shape({
      poster: string,
      title: string,
      year: string,
      description: string
    })
  },
  render() {
    const { title, year, description, poster } = this.props;

    return (
      <div className='show-card'>
        <img src={`/public/img/posters/${poster}`} />
        <div>
          <h3>{title}</h3>
          <h4>({year})</h4>
          <p>{description}</p>
        </div>
      </div>
    )
  }
})

export default ShowCard
