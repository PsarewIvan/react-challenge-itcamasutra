import { FollowAPI, UsersAPI } from './../api/api';

const FOLLOW = 'users/FOLLOW';
const UN_FOLLOW = 'users/UN_FOLLOW';
const SET_USERS = 'users/GET_USERS';
const SET_TOTAL_USER_COUNT = 'users/SET_TOTAL_USER_COUNT';
const CHANGE_CURRENT_PAGE = 'users/CHANGE_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_USERS = 'users/TOGGLE_FOLLOWING_USERS';

const initialState = {
  users: [],
  pageSize: 10,
  currentPage: 1,
  isFetching: false,
  followingUsers: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };

    case UN_FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            return { ...user, followed: false };
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

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        users: [],
        isFetching: action.isFetching,
      };

    case TOGGLE_FOLLOWING_USERS:
      return {
        ...state,
        followingUsers: action.isRequestInProgress
          ? [...state.followingUsers, action.userId]
          : state.followingUsers.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};

const follow = (id) => ({ type: FOLLOW, id });
const unFollow = (id) => ({ type: UN_FOLLOW, id });
const setUsers = (users) => ({ type: SET_USERS, users });
const setTotalPageCount = (totalCount) => ({
  type: SET_TOTAL_USER_COUNT,
  totalCount,
});
const changeCurrentPage = (currentPage) => ({
  type: CHANGE_CURRENT_PAGE,
  currentPage,
});
const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
const toggleFollowingUsers = (isRequestInProgress, userId) => ({
  type: TOGGLE_FOLLOWING_USERS,
  userId,
  isRequestInProgress,
});

// thunks

const followUser = (id) => async (dispatch) => {
  dispatch(toggleFollowingUsers(true, id));
  const data = await FollowAPI.follow(id);
  if (data.resultCode === 0) {
    dispatch(follow(id));
    dispatch(toggleFollowingUsers(false, id));
  }
};

const unfollowUser = (id) => async (dispatch) => {
  dispatch(toggleFollowingUsers(true, id));
  const data = await FollowAPI.unFollow(id);
  if (data.resultCode === 0) {
    dispatch(unFollow(id));
    dispatch(toggleFollowingUsers(false, id));
  }
};

const getUsers = (pageNumber, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  const data = await UsersAPI.getUsers(pageNumber, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setTotalPageCount(data.totalCount));
  dispatch(setUsers(data.items));
};

export { usersReducer, changeCurrentPage, followUser, unfollowUser, getUsers };
