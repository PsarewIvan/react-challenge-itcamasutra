import MessageInput from './MessageInput';
import { Context } from './../../MyContext';
import {
  addMessageCreator,
  changeNewMessageCreator,
} from '../../redux/communication-reducer';

const MessageInputContainer = () => {
  return (
    <Context.Consumer>
      {(store) => {
        const state = store.getState().communication;

        const handleButtonClick = () => {
          store.dispatch(addMessageCreator());
        };

        const handleTextareaInput = (message) => {
          store.dispatch(changeNewMessageCreator(message));
        };

        return (
          <MessageInput
            messagePlaceholder={state.messagePlaceholder}
            userMessageText={state.userMessageText}
            addMessage={handleButtonClick}
            changeMessage={handleTextareaInput}
          />
        );
      }}
    </Context.Consumer>
  );
};

export default MessageInputContainer;
