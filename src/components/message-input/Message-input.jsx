import './Message-input.css';

const MessageInput = () => {
  return (
    <form className="message-input" name="message-input">
      <textarea
        className="message-input__input"
        type="text"
        name="post"
        placeholder="Write a message..."
      ></textarea>
      <button className="message-input__button" type="submit">
        Send
      </button>
    </form>
  );
};

export default MessageInput;
