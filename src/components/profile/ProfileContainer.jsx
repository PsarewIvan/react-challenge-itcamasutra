import React from 'react';
import Profile from './Profile';
import { ProfileAPI } from './../../api/api';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  addPost,
  changePostMessage,
  setProfile,
} from '../../redux/profile-reducer';

const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    posts: state.profile.posts,
    userPostText: state.profile.userPostText,
    postPlaceholder: state.profile.postPlaceholder,
  };
};

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId;
    ProfileAPI.getProfileInfo(userId).then((data) => {
      this.props.setProfile(data);
    });
  }

  render() {
    return <Profile {...this.props} />;
  }
}

export default connect(mapStateToProps, {
  addPost,
  changePostMessage,
  setProfile,
})(withRouter(ProfileContainer));
