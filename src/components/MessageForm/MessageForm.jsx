import { Form, Field } from 'react-final-form';
import './MessageForm.scss';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const MessageForm = (props) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={(props) => {
        return (
          <form className="message-form" onSubmit={props.handleSubmit}>
            <Field
              className="message-form__input"
              component="textarea"
              name="message"
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
