import UserMessage from '../UserMessage/UserMessage';
import './DialogMessages.css';

const DialogMessages = (props) => {
  const messagesElement = props.messages.map((message) => {
    let isCurrentUserMessage = props.currentUserId === message.id;
    let classMod = '';
    if (message.id === props.currentUserId) {
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
          users={props.users}
          currentUserId={props.currentUserId}
        />
      </li>
    );
  });

  return <ul className="dialog-messages">{messagesElement}</ul>;
};

export default DialogMessages;
