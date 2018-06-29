'use strict';
import React from 'react';
import { Link } from 'react-router';

const HeaderUserAuthNav = () => {
  return (
    <ul>
      <li>
        <Link to="/login" activeClassName="header-active-link">
          <i className="fa fa-sign-in" />
          Login
        </Link>
      </li>
      <li>
        <Link to="/register" activeClassName="header-active-link">
          <i className="fa fa-user-plus" />
          Register
        </Link>
      </li>
    </ul>
  );
};

export default HeaderUserAuthNav;
