import React from 'react';
import Header from './Header';

const { shape, string } = React.PropTypes;
const Details = React.createClass({
  propTypes: {
    show: shape({
      title: string,
      description: string,
      year: string,
      poster: string,
      trailer: string
    })
  },
  render() {
    const {
      title,
      description,
      year,
      poster,
      trailer
    } = this.props.show;
    const baseUrl = 'https://www.youtube-nocookie.com/embed';
    const url = `${baseUrl}/${trailer}?rel=0&amp;control=0&amp;showinfo=0`;

    return (
      <div className='details'>
        <Header />
        <section>
          <h1>{ title }</h1>
          <h2>({ year })</h2>
          <img src={`/public/img/posters/${poster}`} />
          <p>{ description }</p>
        </section>
        <div>
          <iframe
            src={ url }
            frameBorder='0'
            allowFullScreen></iframe>
        </div>
      </div>
    );
  }
});

export default Details;
