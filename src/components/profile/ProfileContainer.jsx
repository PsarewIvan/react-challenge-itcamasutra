import Profile from './Profile';
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  addPost,
  getUserProfile,
  updateUserStatus,
  getUserStatus,
} from '../../redux/profile-reducer';
import withAuthRedirect from './../../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    status: state.profile.status,
    posts: state.profile.posts,
  };
};

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId;
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

export default compose(
  connect(mapStateToProps, {
    addPost,
    getUserProfile,
    updateUserStatus,
    getUserStatus,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
