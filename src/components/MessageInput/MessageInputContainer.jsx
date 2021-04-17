import MessageInput from './MessageInput';
import { connect } from 'react-redux';
import {
  addMessageCreator,
  changeNewMessageCreator,
} from '../../redux/communication-reducer';

const mapStateToProps = (state) => {
  const communication = state.communication;

  return {
    messagePlaceholder: communication.messagePlaceholder,
    userMessageText: communication.userMessageText,
  };
};

const mapDispatchToProps = (dispatch) => {
  const handleButtonClick = () => {
    dispatch(addMessageCreator());
  };

  const handleTextareaInput = (message) => {
    dispatch(changeNewMessageCreator(message));
  };
  return {
    addMessage: handleButtonClick,
    changeMessage: handleTextareaInput,
  };
};

const MessageInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageInput);

export default MessageInputContainer;
