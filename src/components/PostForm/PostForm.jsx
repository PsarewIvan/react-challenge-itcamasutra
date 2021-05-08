import Avatar from '../Avatar/Avatar';
import './PostForm.scss';

const PostForm = (props) => {
  const handleButtonClick = (evt) => {
    evt.preventDefault();
    props.addPost();
  };

  const handleTextareaInput = (evt) => {
    props.changePostMessage(evt.target.value);
  };

  return (
    <form className="post-form" name="user-post">
      <div className="post-form__avatar">
        <Avatar
          type="post-form"
          userName={props.userName}
          photos={props.photos}
        />
      </div>
      <textarea
        className="post-form__post"
        type="text"
        name="post"
        value={props.userPostText}
        placeholder={`What's new, ${props.userName}?`}
        onInput={handleTextareaInput}
      ></textarea>
      <button
        className="post-form__button"
        type="submit"
        onClick={handleButtonClick}
      >
        Send
      </button>
    </form>
  );
};

export default PostForm;
