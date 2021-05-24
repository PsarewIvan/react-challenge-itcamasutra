import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import Loader from './../Loader/Loader';
import { required } from './../../common/formValidator';
import './LoginForm.scss';

const CustomField = ({ type, name, placeholder }) => (
  <Field name={name} validate={required}>
    {({ input, meta }) => (
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
    )}
  </Field>
);

const LoginForm = ({ login, isAuthorized, authError, userId }) => {
  const captchaURL = useSelector((state) => state.auth.captchaURL);
  const onSubmit = (formState) => {
    console.log(formState);
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
            {CustomField({
              type: 'email',
              name: 'email',
              placeholder: 'Please type your email',
            })}
            {CustomField({
              type: 'password',
              name: 'password',
              placeholder: 'Please type your password',
            })}
            <label className="login-form__label">
              Remember me
              <Field
                className="login-form__checkbox"
                name="isRemember"
                component="input"
                type="checkbox"
              />
            </label>

            {captchaURL && (
              <>
                <img src={captchaURL} alt="captcha" />
                {CustomField({
                  type: 'text',
                  name: 'captcha',
                  placeholder: 'Enter the characters from the picture',
                })}
              </>
            )}

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
