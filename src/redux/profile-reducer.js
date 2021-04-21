const CHANGE_POST_MESSAGE = 'CHANGE_POST_MESSAGE';
const ADD_POST = 'ADD_POST';
const SET_PROFILE = 'SET_PROFILE';

const initialState = {
  profile: null,
  userPostText: '',
  postPlaceholder: "What's new, ",
  posts: [
    { id: 1, message: 'First post', likeCount: '5' },
    { id: 2, message: 'Second post', likeCount: '1' },
    { id: 3, message: 'Another post', likeCount: '10' },
  ],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_POST_MESSAGE:
      return {
        ...state,
        userPostText: action.newMessage,
      };

    case ADD_POST:
      const newPost = {
        id: state.posts[state.posts.length - 1].id + 1,
        message: state.userPostText,
        likeCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        userPostText: '',
      };

    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    default:
      return state;
  }
};

const changePostMessage = (message) => ({
  type: CHANGE_POST_MESSAGE,
  newMessage: message,
});

const addPost = () => ({
  type: ADD_POST,
});

const setProfile = (profile) => ({
  type: SET_PROFILE,
  profile,
});

export { profileReducer, changePostMessage, addPost, setProfile };
