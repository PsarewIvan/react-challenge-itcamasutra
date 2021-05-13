import { NavLink } from 'react-router-dom';
import userPhoto from './../../assets/img/avatar/avatar.jpeg';
import './Avatar.css';

const Avatar = ({ type, id, photos, userName, userStatus, lastActive }) => {
  let classMod = 'avatar';
  if (type === 'post-input') {
    classMod = `${classMod} ${classMod}--post-input`;
  }
  if (type === 'post') {
    classMod = `${classMod} ${classMod}--post`;
  }
  if (type === 'profile') {
    classMod = `${classMod} ${classMod}--profile`;
  }

  return (
    <div className={classMod}>
      <NavLink className="avatar__link-img" to={`/profile/${id}`}>
        <img
          className="avatar__img"
          src={!photos || photos.small === null ? userPhoto : photos.small}
          alt="avatar"
        />
      </NavLink>
      <NavLink className="avatar__link" to={`/profile/${id}`}>
        {userName}
      </NavLink>
      <span className="avatar__status">{userStatus}</span>
      <span className="avatar__active">{lastActive}</span>
    </div>
  );
};

export default Avatar;
