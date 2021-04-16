import React from 'react';
import {
  addMessageActionCreator,
  changeNewMessageActionCreator,
} from './../../store/Store';
import './Message-input.css';

const MessageInput = (props) => {
  const input = React.createRef();
  const handleButtonClick = (evt) => {
    evt.preventDefault();
    props.dispatch(addMessageActionCreator());
  };
  const handleTextareaInput = () => {
    props.dispatch(changeNewMessageActionCreator(input.current.value));
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
