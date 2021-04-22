import React from 'react';
import { UsersAPI, FollowAPI } from './../../api/api';
import Users from './Users';
import {
  follow,
  unFollow,
  setUsers,
  setTotalPageCount,
  changeCurrentPage,
  toggleIsFetching,
  toggleFollowingUsers,
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
  follow = (id) => {
    this.props.toggleFollowingUsers(true, id);
    FollowAPI.follow(id).then((data) => {
      if (data.resultCode === 0) {
        this.props.follow(id);
        this.props.toggleFollowingUsers(false, id);
      }
    });
  };

  unFollow = (id) => {
    this.props.toggleFollowingUsers(true, id);
    FollowAPI.unFollow(id).then((data) => {
      if (data.resultCode === 0) {
        this.props.unFollow(id);
        this.props.toggleFollowingUsers(false, id);
      }
    });
  };

  serverRequest(pageNumber) {
    this.props.toggleIsFetching(true);
    UsersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setTotalPageCount(data.totalCount);
      this.props.setUsers(data.items);
    });
  }

  changeUserPage = (pageNumber) => {
    this.props.changeCurrentPage(pageNumber);
    this.serverRequest(pageNumber);
  };

  componentDidMount() {
    this.serverRequest(this.props.currentPage);
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
        onFollow={this.follow}
        onUnFollow={this.unFollow}
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
  toggleFollowingUsers,
})(UsersContainer);
