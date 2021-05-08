import React from 'react';
import './ProfileStatus.css';

class ProfileStatus extends React.Component {
  state = {
    isStatusChanging: false,
    status: this.props.status,
  };

  onStartChange = () => {
    this.setState({ isStatusChanging: true });
  };

  onEndChange = () => {
    this.setState({ isStatusChanging: false });
  };

  onUpdateStatus = () => {
    if (this.props.status !== this.state.status) {
      this.props.updateStatus(this.state.status);
    }
    this.setState({ isStatusChanging: false });
  };

  onStatusChange = (evt) => {
    this.setState({
      status: evt.target.value,
    });
  };

  componentDidUpdate() {
    if (this.state.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }

  render() {
    return (
      <div className="profile-status">
        {!this.state.isStatusChanging && (
          <div className="profile-status__text" onClick={this.onStartChange}>
            {this.props.status || 'Change me'}
          </div>
        )}
        {this.state.isStatusChanging && (
          <div className="profile-status__editor">
            <input
              className="profile-status__input"
              type="text"
              value={this.state.status}
              autoFocus={true}
              onChange={this.onStatusChange}
            />
            <button
              className="profile-status__button"
              type="button"
              onClick={this.onUpdateStatus}
            >
              Change status
            </button>
            <button
              className="profile-status__button profile-status__button--cancel"
              type="button"
              onClick={this.onEndChange}
            >
              Close
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
