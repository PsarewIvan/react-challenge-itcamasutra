import './ProfileEditButton.css';
import editLogo from './img/edit.svg';
import backgroundLogo from './img/background.svg';

const ProfileEditButton = (props) => {
  let icon, altText;
  if (props.type === 'settings') {
    icon = editLogo;
    altText = 'Change settings';
  }
  if (props.type === 'background') {
    icon = backgroundLogo;
    altText = 'Change background image';
  }
  return (
    <a className="profile-edit-button" href="/mock-link/">
      <img className="profile-edit-button__icon" src={icon} alt={altText} />
    </a>
  );
};

export default ProfileEditButton;
