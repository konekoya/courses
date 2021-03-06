import React from "react";
import ReactDOM from "react-dom";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import "./index.css";
import UserContext from "./UserContext";

class Root extends React.Component {
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
      <UserContext.Provider
        value={{
          user: this.state.currentUser,
          onLogin: this.handleLogin,
          onLogout: this.handleLogout
        }}
      >
        {this.state.currentUser ? <MainPage /> : <LoginPage />}
      </UserContext.Provider>
    );
  }
}

ReactDOM.render(<Root />, document.querySelector("#root"));
