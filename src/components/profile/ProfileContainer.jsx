import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  addPost,
  changePostMessage,
  setUserProfile,
} from '../../redux/profile-reducer';
import withAuthRedirect from './../../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    posts: state.profile.posts,
    userPostText: state.profile.userPostText,
    postPlaceholder: state.profile.postPlaceholder,
  };
};

class ProfileContainer extends React.Component {
  updateProfile() {
    const userId = this.props.match.params.userId;
    this.props.setUserProfile(userId);
  }
  componentDidMount() {
    this.updateProfile();
  }

  render() {
    return <Profile {...this.props} />;
  }
}

export default connect(mapStateToProps, {
  addPost,
  changePostMessage,
  setUserProfile,
})(withRouter(withAuthRedirect(ProfileContainer)));
