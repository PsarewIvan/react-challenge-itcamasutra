import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
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
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        this.props.setProfile(response.data);
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
})(ProfileContainer);
