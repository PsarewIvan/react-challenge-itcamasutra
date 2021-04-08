import './like-button.css';
import icon from './img/like.svg';

const LikeButton = () => {
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
        <span className="like-button__count">6</span>
      </span>
    </button>
  );
};

export default LikeButton;
