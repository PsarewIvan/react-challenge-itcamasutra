import React from 'react';
import './ProfileEditButton.scss';
import editLogo from './img/edit.svg';
import backgroundLogo from './img/background.svg';

const ProfileEditButton = ({ type }) => {
  console.log('render');
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
    <a className="profile-edit-button" href="/mock-link/">
      <img className="profile-edit-button__icon" src={icon} alt={altText} />
    </a>
  );
};

export default React.memo(ProfileEditButton);
