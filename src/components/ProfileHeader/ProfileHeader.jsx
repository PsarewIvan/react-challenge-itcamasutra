import { useDispatch } from 'react-redux';
import { changePhoto } from './../../redux/profile-reducer';
import ProfileStatus from '../ProfileStatus/ProfileStatus';
import ProfileEditButton from './../ProfileEditButton/ProfileEditButton';
import userPhoto from './../../assets/img/avatar/avatar.jpeg';
import './ProfileHeader.scss';

const ProfileHeader = ({
  photo,
  fullName,
  status,
  updateStatus,
  openEditComponent,
}) => {
  const dispatch = useDispatch();
  const handelInputChange = (evt) => {
    dispatch(changePhoto(evt.target.files[0]));
  };

  return (
    <div className="profile-header">
      <div className="profile-header__avatar">
        <div className="profile-header__img-wrapper">
          <img
            className="profile-header__avatar-img"
            src={!photo ? userPhoto : photo}
            alt="User's avatar"
          />
          <label className="profile-header__label-img" title="Сменить фото">
            <input
              className="profile-header__input-img"
              type="file"
              accept="image/*"
              aria-label="Загрузить фото для аватара"
              placeholder=""
              onChange={handelInputChange}
            ></input>
          </label>
        </div>
        <p className="profile-header__user-name">{fullName}</p>
      </div>
      <div className="profile-header__about">
        <ProfileStatus status={status} updateStatus={updateStatus} />
      </div>
      <div className="profile-header__edit">
        <ProfileEditButton type="settings" onClick={openEditComponent} />
        <ProfileEditButton type="background" />
      </div>
    </div>
  );
};

export default ProfileHeader;
