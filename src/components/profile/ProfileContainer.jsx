import Profile from './Profile';
import { connect } from 'react-redux';
import { addPost, changePostMessage } from '../../redux/profile-reducer';

const mapStateToProps = (state) => {
  return {
    posts: state.profile.posts,
    userName: state.profile.currentUserName,
    userPostText: state.profile.userPostText,
    postPlaceholder: state.profile.postPlaceholder,
    photos: state.profile.photos,
  };
};

const ProfileContainer = connect(mapStateToProps, {
  addPost,
  changePostMessage,
})(Profile);

export default ProfileContainer;
