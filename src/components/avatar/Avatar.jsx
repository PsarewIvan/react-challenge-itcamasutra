import { NavLink } from 'react-router-dom';
import userPhoto from './../../assets/img/avatar/avatar.jpeg';
import './Avatar.css';

const Avatar = (props) => {
  let classMod = 'avatar';
  if (props.type === 'post-input') {
    classMod = `${classMod} ${classMod}--post-input`;
  }
  if (props.type === 'post') {
    classMod = `${classMod} ${classMod}--post`;
  }
  if (props.type === 'profile') {
    classMod = `${classMod} ${classMod}--profile`;
  }

  return (
    <div className={classMod}>
      <NavLink className="avatar__link-img" to={`/profile/${props.id}`}>
        <img
          className="avatar__img"
          src={
            !props.photos || props.photos.small === null
              ? userPhoto
              : props.photos.small
          }
          alt="avatar"
        />
      </NavLink>
      <NavLink className="avatar__link" to={`/profile/${props.id}`}>
        {props.userName}
      </NavLink>
      <span className="avatar__status">{props.userStatus}</span>
      <span className="avatar__active">{props.lastActive}</span>
    </div>
  );
};

export default Avatar;
