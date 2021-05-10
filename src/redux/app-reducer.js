import { authMe } from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
  isInitialize: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return { ...state, isInitialize: true };

    default:
      return state;
  }
};

const initSuccess = () => {
  return { type: INITIALIZED_SUCCESS };
};

// thunks

const initialize = () => {
  return (dispatch) => {
    dispatch(authMe()).then(() => {
      dispatch(initSuccess());
    });
  };
};

export { appReducer, initialize };
