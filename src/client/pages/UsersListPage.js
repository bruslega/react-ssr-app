import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import { Helmet } from "react-helmet";

class UsersListPage extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map((user) => <li key={user.id}>{user.name}</li>);
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users App`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.head()}
        Here's a big list of users<ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

function loadData(store) {
  // returns a promise
  return store.dispatch(fetchUsers());
}

export default {
  component: connect(mapStateToProps, { fetchUsers })(UsersListPage),
  loadData,
};
