import UserMessage from './../User-message/User-message';
import './Dialog-messages.css';

const DialogMessages = (props) => {
  const messagesElement = props.messages.map((message) => {
    return (
      <li
        className="dialog-messages__message"
        key={`dialog-message-${message.id}`}
      >
        <UserMessage message={message.message} />
      </li>
    );
  });

  return <ul className="dialog-messages">{messagesElement}</ul>;
};

export default DialogMessages;
