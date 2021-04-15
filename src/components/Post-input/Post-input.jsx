import Avatar from '../Avatar/Avatar';
import './Post-input.css';

const PostInput = (props) => {
  let currentUserName = '';
  props.users.forEach((user) => {
    if (user.id === props.currentUserId) {
      currentUserName = user.name.split(' ')[0];
    }
  });

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
        placeholder={`What's new, ${currentUserName}?`}
      ></textarea>
      <button className="post-input__button" type="submit">
        Send
      </button>
    </form>
  );
};

export default PostInput;
