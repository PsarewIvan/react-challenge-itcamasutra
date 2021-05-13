import { AuthAPI } from './../api/api';

const CHANGE_AUTHORIZE = 'auth/CHANGE_AUTHORIZE';
const SET_USER_ID = 'auth/SET_USER_ID';
const SET_AUTH_ERROR = 'auth/SET_AUTH_ERROR';

const initialState = {
  isAuthorized: null,
  userId: null,
  authError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_AUTHORIZE:
      return { ...state, isAuthorized: action.isAuthorized };

    case SET_USER_ID:
      return {
        ...state,
        userId: action.userId,
        isAuthorized: action.isAuthorized,
      };

    case SET_AUTH_ERROR:
      return {
        ...state,
        authError: action.error,
      };

    default:
      return state;
  }
};

const changeAuthorize = (isAuthorized) => {
  return { type: CHANGE_AUTHORIZE, isAuthorized };
};

const setUserId = (userId, isAuthorized = false) => {
  return { type: SET_USER_ID, userId, isAuthorized };
};

const setAuthError = (error) => {
  return { type: SET_AUTH_ERROR, error };
};

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
  }
  if (data.resultCode === 1) {
    dispatch(setAuthError(data.messages[0]));
  }
};

const logout = () => async (dispatch) => {
  const data = await AuthAPI.logout();
  if (data.resultCode === 0) {
    dispatch(setUserId(null, false));
  }
};

export { authReducer, authMe, login, logout };
