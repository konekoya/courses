'use strict';

import React, { PropTypes, Component } from 'react';

class HeaderUserProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, logout } = this.props;

    return (
      <ul>
        <li>
          <span className="profile-identity">Welcome </span>
          <span>{user.identity}</span>
        </li>
        <li>
          <a href="#" onClick={logout}>
            <i className="fa fa-sign-out" />
            logout
          </a>
        </li>
      </ul>
    );
  }
}

HeaderUserProfile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default HeaderUserProfile;
