import './Message-input.css';

const MessageInput = () => {
  return (
    <form className="message-input__wrapper" name="message-input">
      <textarea
        className="message-input__post"
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
