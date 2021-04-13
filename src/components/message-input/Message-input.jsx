import Avatar from '../Avatar/Avatar';
import './Message-input.css';

const MessageInput = () => {
  const NAME = 'John';
  return (
    <form className="message-input__wrapper" name="user-post">
      <div className="message-input__avatar">
        <Avatar type="post" />
      </div>
      <textarea
        className="message-input__post"
        type="text"
        name="post"
        placeholder={`What's new, ${NAME}?`}
      ></textarea>
      <button className="message-input__button" type="submit">
        Send
      </button>
    </form>
  );
};

export default MessageInput;
