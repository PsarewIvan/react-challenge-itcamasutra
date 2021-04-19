import React from 'react';
import * as axios from 'axios';
import Users from './Users';
import {
  follow,
  unFollow,
  setUsers,
  setTotalPageCount,
  changeCurrentPage,
  toggleIsFetching,
} from './../../redux/users-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    friendsCount: state.usersPage.friendsCount,
    users: state.usersPage.users,
    isFetching: state.usersPage.isFetching,
  };
};

class UsersContainer extends React.Component {
  componentDidMount() {
    this.serverRequest(this.props.currentPage);
  }

  serverRequest(pageNumber) {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setTotalPageCount(response.data.totalCount);
        this.props.setUsers(response.data.items);
      });
  }

  changeUserPage = (pageNumber) => {
    this.props.changeCurrentPage(pageNumber);
    this.serverRequest(pageNumber);
  };

  render() {
    return (
      <Users
        totalCount={this.props.totalCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        changePage={this.changeUserPage}
        users={this.props.users}
        follow={this.props.follow}
        unFollow={this.props.unFollow}
        isFetching={this.props.isFetching}
      />
    );
  }
}

export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setTotalPageCount,
  changeCurrentPage,
  toggleIsFetching,
})(UsersContainer);
