import { ProfileAPI } from './../api/api';

const ADD_POST = 'profile/ADD_POST';
const SET_PROFILE = 'profile/SET_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';

const initialState = {
  profile: null,
  status: '',
  posts: [
    { id: 1, message: 'First post', likeCount: '5' },
    { id: 2, message: 'Second post', likeCount: '1' },
    { id: 3, message: 'Another post', likeCount: '10' },
  ],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: state.posts[state.posts.length - 1].id + 1,
        message: action.post,
        likeCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };

    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    default:
      return state;
  }
};

const addPost = (post) => ({
  type: ADD_POST,
  post,
});

const setProfile = (profile) => ({
  type: SET_PROFILE,
  profile,
});

const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

// thunks

const getUserProfile = (userId) => async (dispatch) => {
  const data = await ProfileAPI.getProfileInfo(userId);
  dispatch(setProfile(data));
};

const updateUserStatus = (status) => (dispatch) => {
  ProfileAPI.updateProfileStatus(status).then((_response) => {
    dispatch(setStatus(status));
  });
};

const getUserStatus = (id) => async (dispatch) => {
  const data = await ProfileAPI.getProfileStatus(id);
  dispatch(setStatus(data));
};

export {
  profileReducer,
  addPost,
  getUserProfile,
  updateUserStatus,
  getUserStatus,
};
