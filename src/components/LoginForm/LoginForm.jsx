import { NavLink } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import Loader from './../Loader/Loader';
import { required } from './../../common/formValidator';
import './LoginForm.scss';

const CustomField =
  ({ type, placeholder }) =>
  ({ input, meta }) => {
    return (
      <div className="login-form__input-wrapper">
        <input
          className={
            `login-form__input` +
            (meta.error && meta.touched ? ` login-form__input--error` : '')
          }
          {...input}
          type={type}
          placeholder={placeholder}
        />
        {meta.error && meta.touched && (
          <span className="login-form__error">{meta.error}</span>
        )}
      </div>
    );
  };

const LoginForm = ({ login, isAuthorized, authError, userId }) => {
  const onSubmit = (formState) => {
    login(formState);
  };

  if (isAuthorized === null) {
    return <Loader />;
  }
  if (isAuthorized === false) {
    return (
      <Form
        onSubmit={onSubmit}
        subscription={{ submitting: true, pristine: true }}
        render={({ handleSubmit, submitting }) => (
          <form className="login-form" onSubmit={handleSubmit}>
            <Field name="email" validate={required}>
              {CustomField({
                type: 'email',
                placeholder: 'Please type your email',
              })}
            </Field>
            <Field name="password" validate={required}>
              {CustomField({
                type: 'password',
                placeholder: 'Please type your password',
              })}
            </Field>
            <label className="login-form__label">
              Remember me
              <Field
                className="login-form__checkbox"
                name="isRemember"
                component="input"
                type="checkbox"
              />
            </label>
            <button
              className="login-form__submit"
              type="submit"
              disabled={submitting}
            >
              Log into your account
              {authError && (
                <span className="login-form__submit-error">{authError}</span>
              )}
            </button>
          </form>
        )}
      />
    );
  }
  if (isAuthorized) {
    return (
      <div className="login-form">
        <NavLink className="login-form__submit" to={`/profile/${userId}`}>
          Log into your account
        </NavLink>
      </div>
    );
  }
};

export default LoginForm;
