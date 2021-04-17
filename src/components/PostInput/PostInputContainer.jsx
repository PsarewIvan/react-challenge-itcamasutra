import PostInput from './PostInput';
import { connect } from 'react-redux';
import {
  addPostCreator,
  changePostMessageCreator,
} from '../../redux/profile-reducer';

const mapStateToProps = (state) => {
  const users = state.users;
  const profile = state.profile;

  let currentUserName = '';
  users.forEach((user) => {
    if (user.id === profile.currentUserId) {
      currentUserName = user.name.split(' ')[0];
    }
  });

  return {
    users: users,
    currentUserId: profile.currentUserId,
    userPostText: profile.userPostText,
    postPlaceholder: profile.postPlaceholder,
    currentUserName: currentUserName,
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

const PostInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostInput);

export default PostInputContainer;
