import ProfileStatus from '../ProfileStatus/ProfileStatus';
import ProfileEditButton from './../ProfileEditButton/ProfileEditButton';
import userPhoto from './../../assets/img/avatar/avatar.jpeg';
import './ProfileHeader.css';

const ProfileHeader = ({ photo, fullName, status, updateStatus }) => {
  return (
    <div className="profile-header">
      <div className="profile-header__avatar">
        <img
          className="profile-header__avatar-img"
          src={!photo ? userPhoto : photo}
          alt="User's avatar"
        />
        <p className="profile-header__user-name">{fullName}</p>
      </div>
      <div className="profile-header__about">
        <ProfileStatus status={status} updateStatus={updateStatus} />
      </div>
      <div className="profile-header__edit">
        <ProfileEditButton type="settings" />
        <ProfileEditButton type="background" />
      </div>
    </div>
  );
};

export default ProfileHeader;
