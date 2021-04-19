import DialogMessages from './../DialogMessages/DialogMessages';
import Dialogs from './../Dialogs/Dialogs';
import MessageInput from '../MessageInput/MessageInput';
import './Communication.css';

const Communication = (props) => {
  return (
    <div className="communication">
      <div className="communication__messages">
        <DialogMessages
          messages={props.messages}
          currentUserId={props.currentUserId}
          users={props.users}
          photos={props.photos}
        />
      </div>
      <div className="communication__dialogs">
        <Dialogs dialogs={props.dialogs} />
      </div>
      <div className="communication__message-input">
        <MessageInput
          userMessageText={props.userMessageText}
          messagePlaceholder={props.messagePlaceholder}
          addMessage={props.addMessage}
          changeMessage={props.changeMessage}
        />
      </div>
    </div>
  );
};

export default Communication;
