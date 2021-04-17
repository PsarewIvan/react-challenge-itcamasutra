import { createStore, combineReducers } from 'redux';
import { headerReducer } from './header-reducer';
import { communicationReducer } from './communication-reducer';
import { profileReducer } from './profile-reducer';
import { usersReducer } from './users-reducer';

const reducers = combineReducers({
  header: headerReducer,
  communication: communicationReducer,
  profile: profileReducer,
  users: usersReducer,
});

const store = createStore(reducers);

export default store;
