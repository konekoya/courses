import React from "react";

const { Provider, Consumer } = React.createContext();

class UserProvider extends React.Component {
  state = {
    currentUser: null
  };

  handleLogin = user => {
    this.setState({ currentUser: user });
  };

  handleLogout = () => {
    console.log("here");

    this.setState({ currentUser: null });
  };

  render() {
    return (
      <Provider
        value={{
          user: this.state.currentUser,
          onLogin: this.handleLogin,
          onLogout: this.handleLogout
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { UserProvider, Consumer as UserConsumer };
