import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import './styles.css';

class App extends Component {
  state = {
    showBalloon: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      showBalloon: !prevState.showBalloon,
    }));
  };

  render() {
    return (
      <div className="container">
        <button
          className={cx('toggler', {
            'toggler--active': this.state.showBalloon,
          })}
          onClick={this.toggle}
        >
          Menu
        </button>
        {this.state.showBalloon && (
          <div className="menu">
            <ul className="list">
              <li className="list-item">Home</li>
              <li className="list-item">Profile</li>
              <li className="list-item">Favorites</li>
              <li className="list-item">Sign out</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default App;

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
