import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  withRouter
} from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const Prom = () => <h1>Prompt</h1>;
const ColorSwitch = withRouter(props => {
  console.log(props);

  console.log(props.match.url);

  const styles = {
    backgroundColor: props.bgColor || '#000'
  };
  return <h1 style={styles}>ColorSwitch</h1>;
});

const styles = {
  marginRight: '10px'
};

const Links = () => {
  return (
    <div>
      <Link style={styles} to="/">
        Home
      </Link>
      <Link style={styles} to="/prompt">
        Prompt
      </Link>
      <Link to="/color-switch">ColorSwitch</Link>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Links />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/prompt" component={Prom} />
          <Route
            path="/color-switch"
            render={() => <ColorSwitch bgColor="#ff4444" />}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
