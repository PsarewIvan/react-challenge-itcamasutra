import { Form, Field } from 'react-final-form';
import Avatar from '../Avatar/Avatar';
import './PostForm.scss';

const PostFinalForm = (props) => {
  const POST_NAME = 'post';

  const onSubmit = (values) => {
    props.addPost(values[POST_NAME]);
  };

  return (
    <Form
      onSubmit={onSubmit}
      userName={props.userName}
      render={(props) => {
        return (
          <form className="post-form__form" onSubmit={props.handleSubmit}>
            <Field
              className="post-form__post"
              name={POST_NAME}
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
      <PostFinalForm userName={props.userName} addPost={props.addPost} />
    </div>
  );
};

export default PostForm;
