import React from 'react';
import './Message-input.css';

const MessageInput = () => {
  const input = React.createRef();
  const handleButtonClick = (evt) => {
    evt.preventDefault();
    console.log(input.current.value);
  };

  return (
    <form className="message-input" name="message-input">
      <textarea
        className="message-input__input"
        type="text"
        name="post"
        placeholder="Write a message..."
        ref={input}
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
