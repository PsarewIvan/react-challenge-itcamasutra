import { Form, Field } from 'react-final-form';
import { required } from './../../common/formValidator';
import './MessageForm.scss';

const MessageForm = (props) => {
  const MESSAGE_NAME = 'message';

  const onSubmit = (values) => {
    props.addMessage(values[MESSAGE_NAME]);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={(props) => {
        return (
          <form className="message-form" onSubmit={props.handleSubmit}>
            <Field
              className="message-form__input"
              component="textarea"
              validate={required}
              name={MESSAGE_NAME}
              placeholder="Write a message..."
            />
            <button className="message-form__button" type="submit">
              Send
            </button>
          </form>
        );
      }}
    />
  );
};

export default MessageForm;
