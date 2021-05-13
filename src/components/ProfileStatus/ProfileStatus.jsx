import React, { useState, useEffect } from 'react';
import './ProfileStatus.css';

const ProfileStatus = ({ status, updateStatus }) => {
  const [isStatusChanging, toggleStatusView] = useState(false);
  const [thisStatus, setStatus] = useState(status);

  const handleStatusEditOpen = () => {
    toggleStatusView(true);
  };

  const handleStatusSubmit = (evt) => {
    evt.preventDefault();
    if (status !== thisStatus) {
      updateStatus(thisStatus);
    }
    toggleStatusView(false);
  };

  const handleStatusEditClose = () => {
    toggleStatusView(false);
  };

  const handleStatusChange = (evt) => {
    setStatus(evt.target.value);
  };

  useEffect(() => {
    setStatus(status);
  }, [status]);

  return (
    <div className="profile-status">
      {!isStatusChanging && (
        <div className="profile-status__text" onClick={handleStatusEditOpen}>
          {status || 'Change me'}
        </div>
      )}
      {isStatusChanging && (
        <div className="profile-status__editor">
          <form onSubmit={handleStatusSubmit}>
            <input
              className="profile-status__input"
              type="text"
              value={thisStatus}
              autoFocus={true}
              onChange={handleStatusChange}
            />
            <button className="profile-status__button" type="submit">
              Change status
            </button>
            <button
              className="profile-status__button profile-status__button--cancel"
              type="button"
              onClick={handleStatusEditClose}
            >
              Close
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
