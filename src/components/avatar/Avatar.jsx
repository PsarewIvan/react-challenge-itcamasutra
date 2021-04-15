import image from './img/avatar.jpeg';
import './Avatar.css';

const Avatar = (props) => {
  let currentUser;
  props.users.forEach((user) => {
    if (user.id === props.currentUserId) {
      currentUser = user;
    }
  });
  return (
    <div
      className={
        props.type === 'post'
          ? 'avatar__wrapper avatar__wrapper--post'
          : 'avatar__wrapper'
      }
    >
      <a className="avatar__link-img" href="/mock-link">
        <img className="avatar__img" src={image} alt="avatar" />
      </a>
      <a className="avatar__link" href="/mock-link">
        {currentUser.name}
      </a>
      <span className="avatar__status">Member</span>
    </div>
  );
};

export default Avatar;
