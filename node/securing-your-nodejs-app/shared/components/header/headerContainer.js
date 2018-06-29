'use strict';

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import HeaderSiteNav from './headerSiteNavComponent';
import HeaderUserProfile from './headerUserProfileComponent';
import HeaderUserAuthNav from './headerUserAuthNavComponent';
import { bindActionCreators } from 'redux';
import * as authActions from '../../actions/authenticationActions';
import _ from 'underscore';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
    };

    this.logout = this.logout.bind(this);
  }

  logout() {
    const { authActions } = this.props;
    event.preventDefault();
    authActions.logout();
  }

  render() {
    const { user } = this.props;
    if (!_.isEmpty(user)) {
      user.identity =
        user.firstName && user.lastName
          ? `${user.firstName} ${user.lastName}`
          : user.firstName
            ? `${user.firstName}`
            : user.lastName
              ? `${user.lastName}`
              : user.username
                ? `${user.username}`
                : undefined;
    }

    return (
      <nav className="header-nav-container">
        <HeaderSiteNav />
        {(!_.isEmpty(user) && (
          <HeaderUserProfile user={user} logout={this.logout} />
        )) || <HeaderUserAuthNav />}
      </nav>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = state => {
  const { userDataState } = state;
  return { user: userDataState.user };
};

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false },
)(Header);
