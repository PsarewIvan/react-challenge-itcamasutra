import Communication from './Communication';
import { connect } from 'react-redux';
import {
  addMessage,
  changeNewMessage,
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

export default connect(mapStateToProps, { addMessage, changeNewMessage })(
  Communication
);
