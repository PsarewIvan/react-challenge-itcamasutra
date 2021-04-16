const CHANGE_POST_MESSAGE = 'CHANGE_POST_MESSAGE';
const ADD_POST = 'ADD-POST';

const initialState = {
  currentUserId: 1,
  profileItems: [
    { id: 1, name: 'Friends', number: '1' },
    { id: 2, name: 'Groups', number: '3' },
  ],
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
      state.userPostText = action.newMessage;
      return state;
    case ADD_POST:
      const newId = state.posts[state.posts.length - 1].id + 1;
      const newMessageText = state.userPostText;
      const newMessage = {
        id: newId,
        message: newMessageText,
      };
      state.posts.push(newMessage);
      state.userPostText = '';
      return state;
    default:
      return state;
  }
};

const changePostMessageCreator = (message) => {
  return {
    type: CHANGE_POST_MESSAGE,
    newMessage: message,
  };
};

const addPostCreator = () => {
  return {
    type: ADD_POST,
  };
};

export { profileReducer, changePostMessageCreator, addPostCreator };
