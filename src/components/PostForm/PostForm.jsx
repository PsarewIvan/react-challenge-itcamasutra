import { Form, Field } from 'react-final-form';
import Avatar from '../Avatar/Avatar';
import { required } from './../../common/formValidator';
import './PostForm.scss';

const PostFinalForm = ({ addPost, userName }) => {
  const POST_NAME = 'post';

  const onSubmit = (values) => {
    addPost(values[POST_NAME]);
  };

  return (
    <Form
      onSubmit={onSubmit}
      userName={userName}
      render={({ handleSubmit, submitting }) => {
        return (
          <form className="post-form__form" onSubmit={handleSubmit}>
            <Field name={POST_NAME} validate={required}>
              {({ input }) => (
                <textarea
                  className="post-form__input"
                  {...input}
                  placeholder={`What's new, ${userName}?`}
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

const PostForm = ({ userName, photos, addPost }) => {
  return (
    <div className="post-form">
      <div className="post-form__avatar">
        <Avatar type="post-input" userName={userName} photos={photos} />
      </div>
      <PostFinalForm userName={userName} addPost={addPost} />
    </div>
  );
};

export default PostForm;
