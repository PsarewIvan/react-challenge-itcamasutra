import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { headerReducer } from './header-reducer';
import { communicationReducer } from './communication-reducer';
import { profileReducer } from './profile-reducer';
import { usersReducer } from './users-reducer';
import { authReducer } from './auth-reducer';

const reducers = combineReducers({
  auth: authReducer,
  header: headerReducer,
  communication: communicationReducer,
  profile: profileReducer,
  usersPage: usersReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
