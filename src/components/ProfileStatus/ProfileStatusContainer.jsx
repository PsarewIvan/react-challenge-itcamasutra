import React from 'react';
import ProfileStatus from './ProfileStatus';

class ProfileStatusContainer extends React.Component {
  state = {
    isStatusChanging: false,
  };

  startStatusChange = () => {
    this.setState({ isStatusChanging: true });
  };

  endStatusChange = () => {
    this.setState({ isStatusChanging: false });
  };

  render() {
    return (
      <ProfileStatus
        {...this.props}
        isChanging={this.state.isStatusChanging}
        startChange={this.startStatusChange}
        endChange={this.endStatusChange}
      />
    );
  }
}

export default ProfileStatusContainer;
