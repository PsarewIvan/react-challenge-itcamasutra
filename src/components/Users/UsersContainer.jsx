import React from 'react';
import * as axios from 'axios';
import Users from './Users';
import {
  followCreator,
  unFollowCreator,
  setUsersCreator,
  setTotalPageCountCreator,
  changeCurrentPageCreator,
} from './../../redux/users-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    friendsCount: state.usersPage.friendsCount,
    users: state.usersPage.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followCreator(userId));
    },

    unFollow: (userId) => {
      dispatch(unFollowCreator(userId));
    },

    setUsers: (users) => {
      dispatch(setUsersCreator(users));
    },

    setNumberOfPages: (totalCount) => {
      dispatch(setTotalPageCountCreator(totalCount));
    },

    changeCurrentPage: (pageNumber) => {
      dispatch(changeCurrentPageCreator(pageNumber));
    },
  };
};

class UsersContainer extends React.Component {
  componentDidMount() {
    this.serverRequest(this.props.currentPage);
  }

  serverRequest(pageNumber) {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setNumberOfPages(response.data.totalCount);
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
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
