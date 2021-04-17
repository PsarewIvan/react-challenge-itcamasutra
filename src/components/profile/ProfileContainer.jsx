import Profile from './Profile';
import { connect } from 'react-redux';
import {
  addPostCreator,
  changePostMessageCreator,
} from '../../redux/profile-reducer';

const mapStateToProps = (state) => {
  return {
    posts: state.profile.posts,
    users: state.users,
    currentUserId: state.profile.currentUserId,
    userPostText: state.profile.userPostText,
    postPlaceholder: state.profile.postPlaceholder,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostCreator());
    },
    changePostMessage: (message) => {
      dispatch(changePostMessageCreator(message));
    },
  };
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
