import ProfileAbout from './../ProfileAbout/ProfileAbout';
import ProfileEditButton from './../ProfileEditButton/ProfileEditButton';
import userPhoto from './img/avatar.jpeg';
import './ProfileHeader.css';

const ProfileHeader = (props) => {
  return (
    <div className="profile-header">
      <div className="profile-header__avatar">
        <img
          className="profile-header__avatar-img"
          src={
            !props.photos || props.photos.small === null
              ? userPhoto
              : props.photos.large
          }
          alt="User's avatar"
        />
        <p className="profile-header__user-name">{`props.userName`}</p>
      </div>
      <div className="profile-header__about">
        <ProfileAbout />
      </div>
      <div className="profile-header__edit">
        <ProfileEditButton />
        <ProfileEditButton />
      </div>
    </div>
  );
};

export default ProfileHeader;
