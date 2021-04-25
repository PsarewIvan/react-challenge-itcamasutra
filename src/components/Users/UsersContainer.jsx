import React from 'react';
import Users from './Users';
import {
  changeCurrentPage,
  followUser,
  unfollowUser,
  getUsers,
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
    followingUsers: state.usersPage.followingUsers,
  };
};

class UsersContainer extends React.Component {
  changeUserPage = (pageNumber) => {
    this.props.changeCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  render() {
    return (
      <Users
        totalCount={this.props.totalCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        isFetching={this.props.isFetching}
        followingUsers={this.props.followingUsers}
        onChangePage={this.changeUserPage}
        onFollow={this.props.followUser}
        onUnFollow={this.props.unfollowUser}
      />
    );
  }
}

export default connect(mapStateToProps, {
  changeCurrentPage,
  followUser,
  unfollowUser,
  getUsers,
})(UsersContainer);
