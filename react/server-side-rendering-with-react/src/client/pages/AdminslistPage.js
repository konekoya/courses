import React from 'react';
import { connect } from 'react-redux';

import { fetchAdmins } from '../actions';
import RequireAuth from '../components/hocs/requireAuth';

class AdminsListPage extends React.Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map(admin => {
      return <li key={admin.id}>{admin.name}</li>;
    });
  }

  render() {
    return (
      <div>
        <h3>Protected list of admins</h3>
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ admins }) {
  return { admins };
}

function loadData(store) {
  return store.dispatch(fetchAdmins());
}

export { loadData };

export default {
  loadData,
  component: connect(mapStateToProps, { fetchAdmins })(
    RequireAuth(AdminsListPage),
  ),
};
