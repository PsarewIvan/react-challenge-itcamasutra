const LoginForm = (props) => {
  return (
    <form className="login-form" method="get" action="/mock-action/">
      <label className="login-form__label">
        <span className="login-form__hidden">{props.emailAriaText}</span>
        <input
          className="login-form__input"
          type="email"
          placeholder={props.emailPlaceholder}
        />
      </label>
      <label className="login-form__label">
        <span className="login-form__hidden">{props.passwordAriaText}</span>
        <input
          className="login-form__input"
          type="text"
          placeholder={props.passwordPlaceholder}
        />
      </label>
      <button className="login-form__submit" type="submit">
        {props.buttonSubmitText}
      </button>
    </form>
  );
};

export default LoginForm;
