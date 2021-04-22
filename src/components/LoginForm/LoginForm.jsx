import { NavLink } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = (props) => {
  const handleEmailInput = (evt) => {
    props.onChangeEmail(evt.target.value);
  };

  const handlePasswordInput = (evt) => {
    props.onChangePassword(evt.target.value);
  };

  let renderForm;
  if (!props.isAuthorized) {
    renderForm = (
      <form className="login-form" method="get" action="/mock-action/">
        <input
          className="login-form__input"
          type="email"
          name="email"
          value={props.emailMessageText}
          placeholder={props.emailPlaceholder}
          aria-label={props.emailAriaText}
          onInput={handleEmailInput}
        />
        <input
          className="login-form__input"
          type="password"
          name="password"
          value={props.passwordMessageText}
          placeholder={props.passwordPlaceholder}
          aria-label={props.passwordAriaText}
          onInput={handlePasswordInput}
        />
        <button className="login-form__submit" type="submit">
          {props.buttonSubmitText}
        </button>
      </form>
    );
  } else {
    renderForm = (
      <div className="login-form">
        <NavLink className="login-form__submit" to={`/profile/${props.userId}`}>
          {props.buttonSubmitText}
        </NavLink>
      </div>
    );
  }

  return <>{renderForm}</>;
};

export default LoginForm;
