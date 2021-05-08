import { NavLink } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import Loader from './../Loader/Loader';
import './LoginForm.scss';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const LoginForm = (props) => {
  let renderForm;
  if (props.isAuthorized === null) {
    renderForm = <Loader />;
  }
  if (props.isAuthorized === false) {
    renderForm = (
      <Form
        onSubmit={onSubmit}
        render={(props) => {
          return (
            <form className="login-form" onSubmit={props.handleSubmit}>
              <Field
                className="login-form__input"
                name="email"
                component="input"
                type="email"
                placeholder="Please type your email"
              />
              <Field
                className="login-form__input"
                name="password"
                component="input"
                type="password"
                placeholder="Please type your password"
              />
              <label className="login-form__label">
                Remember me
                <Field
                  className="login-form__checkbox"
                  name="isSave"
                  component="input"
                  type="checkbox"
                />
              </label>
              <button className="login-form__submit" type="submit">
                Log into your account
              </button>
            </form>
          );
        }}
      />
    );
  }
  if (props.isAuthorized) {
    renderForm = (
      <div className="login-form">
        <NavLink className="login-form__submit" to={`/profile/${props.userId}`}>
          Log into your account
        </NavLink>
      </div>
    );
  }
  return <>{renderForm}</>;
};

export default LoginForm;
