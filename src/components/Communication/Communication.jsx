import DialogMessages from './../DialogMessages/DialogMessages';
import Dialogs from './../Dialogs/Dialogs';
import MessageInputContainer from '../MessageInput/MessageInputContainer';
import './Communication.css';

const Communication = (props) => {
  return (
    <div className="communication">
      <div className="communication__messages">
        <DialogMessages
          messages={props.messages}
          currentUserId={props.currentUserId}
          users={props.users}
        />
      </div>
      <div className="communication__dialogs">
        <Dialogs dialogs={props.dialogs} />
      </div>
      <div className="communication__message-input">
        <MessageInputContainer
        // userMessageText={props.userMessageText}
        // messagePlaceholder={props.messagePlaceholder}
        // dispatch={props.dispatch}
        />
      </div>
    </div>
  );
};

export default Communication;
