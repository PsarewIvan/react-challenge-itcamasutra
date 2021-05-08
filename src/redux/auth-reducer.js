import { AuthAPI } from './../api/api';

const CHANGE_AUTHORIZE = 'CHANGE_AUTHORIZE';
const SET_USER_ID = 'SET_USER_ID';

const initialState = {
  isAuthorized: null,
  userId: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_AUTHORIZE:
      return { ...state, isAuthorized: action.isAuthorized };

    case SET_USER_ID:
      return { ...state, userId: action.userId };

    default:
      return state;
  }
};

const changeAuthorize = (isAuthorized) => {
  return { type: CHANGE_AUTHORIZE, isAuthorized };
};

const setUserId = (userId) => {
  return { type: SET_USER_ID, userId };
};

// thunks

const authMe = () => {
  return (dispatch) => {
    AuthAPI.authMe().then((data) => {
      if (data.resultCode === 0) {
        dispatch(changeAuthorize(true));
        dispatch(setUserId(data.data.id));
      }
      if (data.resultCode === 1) {
        dispatch(changeAuthorize(false));
      }
    });
  };
};

export { authReducer, authMe };
