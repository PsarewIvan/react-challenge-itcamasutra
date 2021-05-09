import { Form, Field } from 'react-final-form';
import Avatar from '../Avatar/Avatar';
import { required } from './../../common/formValidator';
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
      render={({ handleSubmit, submitting }) => {
        return (
          <form className="post-form__form" onSubmit={handleSubmit}>
            <Field name={POST_NAME} validate={required}>
              {({ input }) => (
                <textarea
                  className="post-form__input"
                  {...input}
                  placeholder={`What's new, ${props.userName}?`}
                ></textarea>
              )}
            </Field>
            <button className="post-form__button" disabled={submitting}>
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
