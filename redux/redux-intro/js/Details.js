import React from 'react';
import axios from 'axios';
import Header from './Header';

const { shape, string } = React.PropTypes;
const Details = React.createClass({
  propTypes: {
    show: shape({
      title: string,
      description: string,
      year: string,
      poster: string,
      trailer: string,
      imdbID: string
    })
  },
  getInitialState() {
    return {
      omdbData: {}
    };
  },
  componentDidMount() {
    axios
      .get(`http://www.omdbapi.com/?i${this.props.show.imdbID}`)
      .then(response => {
        this.setState({ omdbData: response.data });
      })
      .catch(error => console.log(('axios error': error))); // eslint-disable-line no-console
  },
  render() {
    const { title, description, year, poster, trailer } = this.props.show;
    const baseUrl = 'https://www.youtube-nocookie.com/embed';
    const url = `${baseUrl}/${trailer}?rel=0&amp;control=0&amp;showinfo=0`;

    let rating = undefined;
    if (this.state.omdbData.imdbRating) {
      rating = <h3>{this.state.omdbData.imdbRating}</h3>;
    } else {
      rating = <img src="/public/img/loading.png" alt="loading indicator" />;
    }

    return (
      <div className="details">
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {rating}
          <img src={`/public/img/posters/${poster}`} />
          <p>{description}</p>
        </section>
        <div>
          <iframe src={url} frameBorder="0" allowFullScreen />
        </div>
      </div>
    );
  }
});

export default Details;
