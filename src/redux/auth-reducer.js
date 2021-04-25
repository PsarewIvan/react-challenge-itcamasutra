import { AuthAPI } from './../api/api';

const CHANGE_EMAIL = 'CHANGE_EMAIL';
const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
const CHANGE_AUTHORIZE = 'CHANGE_AUTHORIZE';
const SET_USER_ID = 'SET_USER_ID';

const initialState = {
  isAuthorized: false,
  userId: null,
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

    case CHANGE_AUTHORIZE:
      return { ...state, isAuthorized: action.isAuthorized };

    case SET_USER_ID:
      return { ...state, userId: action.userId };

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

const changeAuthorize = (isAuthorized) => {
  return { type: CHANGE_AUTHORIZE, isAuthorized };
};

const setUserId = (userId) => {
  return { type: SET_USER_ID, userId };
};

// thunk

const authMe = () => {
  return (dispatch) => {
    AuthAPI.authMe().then((data) => {
      if (data.resultCode === 0) {
        dispatch(changeAuthorize(true));
        dispatch(setUserId(data.data.id));
      }
    });
  };
};

export { authReducer, changeEmail, changePassword, authMe };
