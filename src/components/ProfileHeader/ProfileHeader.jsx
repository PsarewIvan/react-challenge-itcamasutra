import ProfileStatus from './../ProfileStatus/ProfileStatus';
import ProfileEditButton from './../ProfileEditButton/ProfileEditButton';
import userPhoto from './../../assets/img/avatar/avatar.jpeg';
import './ProfileHeader.css';

const ProfileHeader = (props) => {
  return (
    <div className="profile-header">
      <div className="profile-header__avatar">
        <img
          className="profile-header__avatar-img"
          src={!props.photo ? userPhoto : props.photo}
          alt="User's avatar"
        />
        <p className="profile-header__user-name">{props.fullName}</p>
      </div>
      <div className="profile-header__about">
        <ProfileStatus about={`props.about`} />
      </div>
      <div className="profile-header__edit">
        <ProfileEditButton type="settings" />
        <ProfileEditButton type="background" />
      </div>
    </div>
  );
};

export default ProfileHeader;
