import UserMessage from './../User-message/User-message';
import './Dialog-messages.css';

const DialogMessages = () => {
  return (
    <div className="DialogMessages">
      <UserMessage message="First message" />
      <UserMessage message="Second message" />
      <UserMessage message="Another message" />
    </div>
  );
};

export default DialogMessages;
