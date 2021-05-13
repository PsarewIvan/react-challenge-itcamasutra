import UserMessage from '../UserMessage/UserMessage';
import './DialogMessages.css';

const DialogMessages = ({ messages, currentUserId, users, photos }) => {
  const messagesElement = messages.map((message) => {
    let isCurrentUserMessage = currentUserId === message.id;
    let classMod = '';
    if (message.id === currentUserId) {
      classMod = 'dialog-messages__message--self';
    }
    return (
      <li
        className={`dialog-messages__message ${classMod}`}
        key={`dialog-message-${message.id}`}
      >
        <UserMessage
          message={message.message}
          currentUser={isCurrentUserMessage}
          users={users}
          currentUserId={currentUserId}
          photos={photos}
        />
      </li>
    );
  });

  return <ul className="dialog-messages">{messagesElement}</ul>;
};

export default DialogMessages;
