import React, { Component } from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

const Links = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/ljfdas;">ljfdas</Link>
    </nav>
  );
};

const Header = props => {
  return (
    <header>
      <Route
        path="/:page"
        render={props => {
          return <h1>{props.match.params.page}</h1>;
        }}
      />
    </header>
  );
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Links />
          <Header />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
