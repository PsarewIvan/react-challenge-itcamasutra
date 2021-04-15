import React from 'react';
import './Message-input.css';

const MessageInput = (props) => {
  const input = React.createRef();
  const handleButtonClick = (evt) => {
    evt.preventDefault();
    props.addMessage();
  };
  const handleTextareaInput = () => {
    props.changeNewMessage(input.current.value);
  };

  return (
    <form className="message-input" name="message-input">
      <textarea
        className="message-input__input"
        type="text"
        name="post"
        placeholder={props.messagePlaceholder}
        value={props.userMessageText}
        ref={input}
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
