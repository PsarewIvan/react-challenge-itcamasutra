import React from 'react';
import './ProfileEditButton.scss';
import editLogo from './img/edit.svg';
import backgroundLogo from './img/background.svg';

const ProfileEditButton = ({ type, onClick }) => {
  let icon, altText;
  if (type === 'settings') {
    icon = editLogo;
    altText = 'Change settings';
  }
  if (type === 'background') {
    icon = backgroundLogo;
    altText = 'Change background image';
  }

  return (
    <button className="profile-edit-button" type="button" onClick={onClick}>
      <img className="profile-edit-button__icon" src={icon} alt={altText} />
    </button>
  );
};

export default React.memo(ProfileEditButton);
