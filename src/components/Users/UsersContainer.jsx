import Users from './Users';
import {
  followCreator,
  unFollowCreator,
  setUsersCreator,
} from './../../redux/users-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    usersCount: state.usersPage.usersCount,
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
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
