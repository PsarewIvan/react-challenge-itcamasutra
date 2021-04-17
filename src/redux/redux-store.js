import { createStore, combineReducers } from 'redux';
import { communicationReducer } from './communication-reducer';
import { profileReducer } from './profile-reducer';
import { usersReducer } from './users-reducer';

const reducers = combineReducers({
  communication: communicationReducer,
  profile: profileReducer,
  users: usersReducer,
});

const store = createStore(reducers);

export default store;
