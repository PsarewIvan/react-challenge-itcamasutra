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
      <a className="avatar__link-img" href="/mock-link">
        <img
          className="avatar__img"
          src={
            !props.photos || props.photos.small === null
              ? userPhoto
              : props.photos.small
          }
          alt="avatar"
        />
      </a>
      <a className="avatar__link" href="/mock-link">
        {props.userName}
      </a>
      <span className="avatar__status">{props.userStatus}</span>
      <span className="avatar__active">{props.lastActive}</span>
    </div>
  );
};

export default Avatar;
