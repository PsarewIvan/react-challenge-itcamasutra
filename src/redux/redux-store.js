import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { headerReducer } from './header-reducer';
import { communicationReducer } from './communication-reducer';
import { profileReducer } from './profile-reducer';
import { usersReducer } from './users-reducer';
import { authReducer } from './auth-reducer';
import { appReducer } from './app-reducer';

const reducers = combineReducers({
  auth: authReducer,
  header: headerReducer,
  communication: communicationReducer,
  profile: profileReducer,
  usersPage: usersReducer,
  app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
