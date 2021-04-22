const CHANGE_EMAIL = 'CHANGE_EMAIL';
const CHANGE_PASSWORD = 'CHANGE_PASSWORD';

const initialState = {
  emailAriaText: 'Please type your email',
  emailPlaceholder: 'Email',
  passwordAriaText: 'Please type your password',
  buttonSubmitText: 'Log into your account',
  passwordPlaceholder: 'Password',
  emailMessageText: '',
  passwordMessageText: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return { ...state, emailMessageText: action.email };

    case CHANGE_PASSWORD:
      return { ...state, passwordMessageText: action.pass };

    default:
      return state;
  }
};

const changeEmail = (email) => {
  return { type: CHANGE_EMAIL, email };
};

const changePassword = (pass) => {
  return { type: CHANGE_PASSWORD, pass };
};

export { authReducer, changeEmail, changePassword };
