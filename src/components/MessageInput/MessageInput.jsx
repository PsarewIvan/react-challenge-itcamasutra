import './MessageInput.css';

const MessageInput = (props) => {
  const handleButtonClick = (evt) => {
    evt.preventDefault();
    props.addMessage();
  };

  const handleTextareaInput = (evt) => {
    props.changeMessage(evt.target.value);
  };

  return (
    <form className="message-input" name="message-input">
      <textarea
        className="message-input__input"
        type="text"
        name="post"
        placeholder={props.messagePlaceholder}
        value={props.userMessageText}
        onInput={handleTextareaInput}
      ></textarea>
      <button
        className="message-input__button"
        type="submit"
        onClick={handleButtonClick}
      >
        Send
      </button>
    </form>
  );
};

export default MessageInput;
