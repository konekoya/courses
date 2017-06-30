import React from 'react';
import { connect } from 'react-redux';
import { getOMDBDetails } from './actionCreators';
import Header from './Header';

const { shape, string, func } = React.PropTypes;
const Details = React.createClass({
  propTypes: {
    show: shape({
      title: string,
      description: string,
      year: string,
      poster: string,
      trailer: string,
      imdbID: string
    }),
    omdbData: shape({
      imdbID: string
    }),
    dispatch: func
  },
  componentDidMount() {
    if (!this.props.omdbData.imdbRating) {
      this.props.dispatch(getOMDBDetails(this.props.show.imdbID));
    }
  },
  render() {
    const { title, description, year, poster, trailer } = this.props.show;
    const baseUrl = 'https://www.youtube-nocookie.com/embed';
    const url = `${baseUrl}/${trailer}?rel=0&amp;control=0&amp;showinfo=0`;

    let rating = undefined;
    if (this.props.omdbData.imdbRating) {
      rating = <h3>{this.props.omdbData.imdbRating}</h3>;
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

function mapStateToProps(state) {
  return {
    omdbData: state.omdbData.imdbRating
  };
}

export default connect(mapStateToProps)(Details);
