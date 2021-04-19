const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'GET_USERS';

const initialState = { users: [] };

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            return { ...user, isFollowed: true };
          }
          return user;
        }),
      };

    case UN_FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            return { ...user, isFollowed: false };
          }
          return user;
        }),
      };

    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };

    default:
      return state;
  }
};

const followCreator = (id) => ({ type: FOLLOW, id });
const unFollowCreator = (id) => ({ type: UN_FOLLOW, id });
const setUsersCreator = (users) => ({ type: SET_USERS, users });

export { usersReducer, followCreator, unFollowCreator, setUsersCreator };
