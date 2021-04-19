import Avatar from '../Avatar/Avatar';
import './PostInput.css';

const PostInput = (props) => {
  const handleButtonClick = (evt) => {
    evt.preventDefault();
    props.addPost();
  };

  const handleTextareaInput = (evt) => {
    props.changePostMessage(evt.target.value);
  };

  return (
    <form className="post-input" name="user-post">
      <div className="post-input__avatar">
        <Avatar
          type="post-input"
          userName={props.userName}
          photos={props.photos}
        />
      </div>
      <textarea
        className="post-input__post"
        type="text"
        name="post"
        value={props.userPostText}
        placeholder={`${props.postPlaceholder}${props.userName}?`}
        onInput={handleTextareaInput}
      ></textarea>
      <button
        className="post-input__button"
        type="submit"
        onClick={handleButtonClick}
      >
        Send
      </button>
    </form>
  );
};

export default PostInput;
