import { Form, Field } from 'react-final-form';
import Avatar from '../Avatar/Avatar';
import './PostForm.scss';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const PostFinalForm = (props) => {
  return (
    <Form
      onSubmit={onSubmit}
      userName={props.userName}
      render={(props) => {
        return (
          <form className="post-form__form" onSubmit={props.handleSubmit}>
            <Field
              className="post-form__post"
              name="post"
              component="textarea"
              placeholder={`What's new, ${props.userName}?`}
            />
            <button className="post-form__button" type="submit">
              Send
            </button>
          </form>
        );
      }}
    />
  );
};

const PostForm = (props) => {
  return (
    <div className="post-form">
      <div className="post-form__avatar">
        <Avatar
          type="post-input"
          userName={props.userName}
          photos={props.photos}
        />
      </div>
      <PostFinalForm userName={props.userName} />
    </div>
  );
};

export default PostForm;
