import image from './img/avatar.jpeg';
import './Avatar.css';

const Avatar = (props) => {
  let classMod = 'avatar';
  if (props.type === 'post-input') {
    classMod = `${classMod} ${classMod}--post-input`;
  }
  if (props.type === 'post') {
    classMod = `${classMod} ${classMod}--post`;
  }

  return (
    <div className={classMod}>
      <a className="avatar__link-img" href="/mock-link">
        <img className="avatar__img" src={image} alt="avatar" />
      </a>
      <a className="avatar__link" href="/mock-link">
        {props.userName}
      </a>
      <span className="avatar__status">{props.userStatus}</span>
    </div>
  );
};

export default Avatar;
