import Avatar from '../Avatar/Avatar';
import './PostInput.css';

const PostInput = (props) => {
  let currentUserName = '';
  props.users.forEach((user) => {
    if (user.id === props.currentUserId) {
      const userName = user.name;
      currentUserName = userName.split(' ')[0];
    }
  });

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
          users={props.users}
          currentUserId={props.currentUserId}
        />
      </div>
      <textarea
        className="post-input__post"
        type="text"
        name="post"
        value={props.userPostText}
        placeholder={`${props.postPlaceholder}${currentUserName}?`}
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
