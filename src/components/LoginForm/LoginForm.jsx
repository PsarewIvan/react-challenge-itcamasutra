import './LoginForm.css';

const LoginForm = (props) => {
  return (
    <form className="login-form" method="get" action="/mock-action/">
      <input
        className="login-form__input"
        type="email"
        name="email"
        placeholder={props.emailPlaceholder}
        aria-label={props.emailAriaText}
      />
      <input
        className="login-form__input"
        type="password"
        name="password"
        placeholder={props.passwordPlaceholder}
        aria-label={props.passwordAriaText}
      />
      <button className="login-form__submit" type="submit">
        {props.buttonSubmitText}
      </button>
    </form>
  );
};

export default LoginForm;
