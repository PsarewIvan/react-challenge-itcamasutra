import './Like-button.css';
import icon from './img/like.svg';

const LikeButton = (props) => {
  return (
    <button className="like-button" type="button">
      <span className="like-button__wrapper">
        <img
          className="like-button__icon"
          src={icon}
          alt="like icon"
          aria-hidden="true"
        ></img>
        <span className="like-button__text">Like</span>
        <span className="like-button__count">{props.likeCount}</span>
      </span>
    </button>
  );
};

export default LikeButton;
