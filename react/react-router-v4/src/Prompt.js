import React from 'react';
import { BrowserRouter, Route, Switch, Link, Prompt } from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const Header = () => <h1>Header</h1>;
const Footer = () => <h1>Footer</h1>;

const Sidebar = () => {
  return (
    <div className="leftNavContainer">
      <Link to="/" className="navLink">
        Home
      </Link>
      <Link to="/prompt" className="navLink">
        Prompt
      </Link>
    </div>
  );
};

class Form extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    dirty: false
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value, dirty: true });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          type="text"
          name="firstName"
          value={this.state.firstName}
        />
        <input
          onChange={this.handleChange}
          type="text"
          name="lastName"
          value={this.state.lastName}
        />
        <button>Submit</button>

        <Prompt
          when={this.state.dirty}
          message="Leaving this form will lose your data."
        />
      </form>
    );
  }
}

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Sidebar />
        <div className="rightContentContainer">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/prompt" component={Form} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
