import { createStore, combineReducers } from 'redux';
import { communicationReducer } from './communication-reducer';
import { profileReducer } from './profile-reducer';
import { userReducer } from './user-reducer';

const reducers = combineReducers({
  communication: communicationReducer,
  profile: profileReducer,
  users: userReducer,
});

const store = createStore(reducers);

export default store;
