import React from 'react';
import {
  addMessageCreator,
  changeNewMessageCreator,
} from './../../store/message-reducer';
import './Message-input.css';

const MessageInput = (props) => {
  const handleButtonClick = (evt) => {
    evt.preventDefault();
    props.dispatch(addMessageCreator());
  };

  const handleTextareaInput = (evt) => {
    props.dispatch(changeNewMessageCreator(evt.target.value));
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
