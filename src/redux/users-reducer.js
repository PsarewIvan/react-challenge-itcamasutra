const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'GET_USERS';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';

const initialState = { users: [], pageSize: 10, currentPage: 1161 };

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
      return { ...state, users: [...action.users] };

    case SET_TOTAL_USER_COUNT:
      return {
        ...state,
        totalCount: action.totalCount,
      };

    case CHANGE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };

    default:
      return state;
  }
};

const followCreator = (id) => ({ type: FOLLOW, id });
const unFollowCreator = (id) => ({ type: UN_FOLLOW, id });
const setUsersCreator = (users) => ({ type: SET_USERS, users });
const setTotalPageCountCreator = (totalCount) => ({
  type: SET_TOTAL_USER_COUNT,
  totalCount,
});
const changeCurrentPageCreator = (currentPage) => ({
  type: CHANGE_CURRENT_PAGE,
  currentPage,
});

export {
  usersReducer,
  followCreator,
  unFollowCreator,
  setUsersCreator,
  setTotalPageCountCreator,
  changeCurrentPageCreator,
};
