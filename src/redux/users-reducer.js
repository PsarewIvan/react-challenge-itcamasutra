import { FollowAPI, UsersAPI } from './../api/api';

const FOLLOW = 'users/FOLLOW';
const UN_FOLLOW = 'users/UN_FOLLOW';
const SET_USERS = 'users/GET_USERS';
const SET_TOTAL_USER_COUNT = 'users/SET_TOTAL_USER_COUNT';
const CHANGE_CURRENT_PAGE = 'users/CHANGE_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_USERS = 'users/TOGGLE_FOLLOWING_USERS';

// reducer helpers

const followingUser = (users, id, isFollow) =>
  users.map((user) => {
    if (user.id === id) {
      return { ...user, followed: isFollow };
    }
    return user;
  });

// reducer

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
        users: followingUser(state.users, action.id, true),
      };

    case UN_FOLLOW:
      return {
        ...state,
        users: followingUser(state.users, action.id, false),
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

// action-creators

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

// helpers

const followUnfollow = async ({ dispatch, id, apiMethod, actionCreator }) => {
  dispatch(toggleFollowingUsers(true, id));
  const data = await apiMethod(id);
  if (data.resultCode === 0) {
    dispatch(actionCreator(id));
    dispatch(toggleFollowingUsers(false, id));
  }
};

// thunks

const followUser = (id) => async (dispatch) => {
  const apiMethod = FollowAPI.follow.bind(FollowAPI);
  followUnfollow({ dispatch, id, apiMethod, follow });
};

const unfollowUser = (id) => async (dispatch) => {
  const apiMethod = FollowAPI.unFollow.bind(FollowAPI);
  followUnfollow({ dispatch, id, apiMethod, unFollow });
};

const getUsers = (pageNumber, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  const data = await UsersAPI.getUsers(pageNumber, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setTotalPageCount(data.totalCount));
  dispatch(setUsers(data.items));
};

export { usersReducer, changeCurrentPage, followUser, unfollowUser, getUsers };
