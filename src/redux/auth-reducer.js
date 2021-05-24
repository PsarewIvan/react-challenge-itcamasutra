import { AuthAPI, SecurityAPI } from './../api/api';

const CHANGE_AUTHORIZE = 'auth/CHANGE_AUTHORIZE';
const SET_USER_ID = 'auth/SET_USER_ID';
const SET_AUTH_ERROR = 'auth/SET_AUTH_ERROR';
const SET_CAPTCHA = 'auth/SET_CAPTCHA';

const initialState = {
  isAuthorized: null,
  userId: null,
  authError: null,
  captchaURL: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_AUTHORIZE:
    case SET_USER_ID:
    case SET_AUTH_ERROR:
    case SET_CAPTCHA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const changeAuthorize = (isAuthorized) => ({
  type: CHANGE_AUTHORIZE,
  payload: { isAuthorized },
});

const setUserId = (userId, isAuthorized = false) => ({
  type: SET_USER_ID,
  payload: { userId, isAuthorized },
});

const setAuthError = (error) => ({
  type: SET_AUTH_ERROR,
  payload: { error },
});

const setCaptcha = (captchaURL) => ({
  type: SET_CAPTCHA,
  payload: { captchaURL },
});

// thunks

const authMe = () => async (dispatch) => {
  const data = await AuthAPI.authMe();
  if (data.resultCode === 0) {
    dispatch(changeAuthorize(true));
    dispatch(setUserId(data.data.id, true));
  }
  if (data.resultCode === 1) {
    dispatch(changeAuthorize(false));
  }
};

const login = (loginState) => async (dispatch) => {
  const data = await AuthAPI.login(loginState);
  if (data.resultCode === 0) {
    dispatch(authMe());
  } else {
    if (data.resultCode === 10) {
      dispatch(getCaptcha());
    }
    dispatch(setAuthError(data.messages[0]));
  }
};

const logout = () => async (dispatch) => {
  const data = await AuthAPI.logout();
  if (data.resultCode === 0) {
    dispatch(setUserId(null, false));
  }
};

const getCaptcha = () => async (dispatch) => {
  const data = await SecurityAPI.getCaptcha();
  dispatch(setCaptcha(data.url));
};

export { authReducer, authMe, login, logout };
