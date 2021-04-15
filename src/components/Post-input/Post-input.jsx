import Avatar from '../Avatar/Avatar';
import './Post-input.css';

const PostInput = (props) => {
  const NAME = 'John';
  return (
    <form className="post-input__wrapper" name="user-post">
      <div className="post-input__avatar">
        <Avatar
          type="post"
          users={props.users}
          currentUserId={props.currentUserId}
        />
      </div>
      <textarea
        className="post-input__post"
        type="text"
        name="post"
        placeholder={`What's new, ${NAME}?`}
      ></textarea>
      <button className="post-input__button" type="submit">
        Send
      </button>
    </form>
  );
};

export default PostInput;
