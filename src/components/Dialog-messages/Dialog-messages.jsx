import UserMessage from './../User-message/User-message';
import './Dialog-messages.css';

const messages = [
  { id: 1, message: 'First message' },
  { id: 2, message: 'Second message' },
  { id: 3, message: 'Another message' },
];

const DialogMessages = () => {
  const messagesElement = messages.map((message) => {
    return (
      <li class="dialog-messages__message">
        <UserMessage
          message={message.message}
          key={`user-message-${message.id}`}
        />
      </li>
    );
  });

  return <ul className="dialog-messages">{messagesElement}</ul>;
};

export default DialogMessages;
