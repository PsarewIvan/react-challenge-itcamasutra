const CHANGE_POST_MESSAGE = 'CHANGE_POST_MESSAGE';
const ADD_POST = 'ADD_POST';

const initialState = {
  currentUserName: 'John Doe',
  photos: {
    small: null,
    large: null,
  },
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

    default:
      return state;
  }
};

const changePostMessage = (message) => {
  return {
    type: CHANGE_POST_MESSAGE,
    newMessage: message,
  };
};

const addPost = () => {
  return {
    type: ADD_POST,
  };
};

export { profileReducer, changePostMessage, addPost };
