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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
