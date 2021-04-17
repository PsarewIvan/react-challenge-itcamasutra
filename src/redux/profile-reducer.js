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
  const newState = { ...state };
  switch (action.type) {
    case CHANGE_POST_MESSAGE:
      newState.userPostText = action.newMessage;
      return newState;
    case ADD_POST:
      const newId = newState.posts[newState.posts.length - 1].id + 1;
      const newMessageText = newState.userPostText;
      const newMessage = {
        id: newId,
        message: newMessageText,
        likeCount: 0,
      };
      newState.posts.push(newMessage);
      newState.userPostText = '';
      return newState;
    default:
      return newState;
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
