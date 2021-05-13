import DialogMessages from './../DialogMessages/DialogMessages';
import Dialogs from './../Dialogs/Dialogs';
import MessageForm from '../MessageForm/MessageForm';
import './Communication.css';

const Communication = ({
  messages,
  currentUserId,
  users,
  photos,
  dialogs,
  addMessage,
}) => {
  return (
    <div className="communication">
      <div className="communication__messages">
        <DialogMessages
          messages={messages}
          currentUserId={currentUserId}
          users={users}
          photos={photos}
        />
      </div>
      <div className="communication__dialogs">
        <Dialogs dialogs={dialogs} />
      </div>
      <div className="communication__message-input">
        <MessageForm addMessage={addMessage} />
      </div>
    </div>
  );
};

export default Communication;
