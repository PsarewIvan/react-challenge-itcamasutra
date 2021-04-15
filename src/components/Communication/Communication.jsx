import DialogMessages from './../Dialog-messages/Dialog-messages';
import Dialogs from './../Dialogs/Dialogs';
import MessageInput from './../Message-input/Message-input';
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
        <MessageInput />
      </div>
    </div>
  );
};

export default Communication;
