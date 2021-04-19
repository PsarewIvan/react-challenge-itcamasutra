import Communication from './Communication';
import { connect } from 'react-redux';
import {
  addMessageCreator,
  changeNewMessageCreator,
} from '../../redux/communication-reducer';

const mapStateToProps = (state) => {
  return {
    messages: state.communication.messages,
    dialogs: state.communication.dialogs,
    currentUserId: state.profile.currentUserId,
    users: state.users,
    userMessageText: state.communication.userMessageText,
    messagePlaceholder: state.communication.messagePlaceholder,
    photos: state.communication.photos,
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

const CommunicationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Communication);

export default CommunicationContainer;
