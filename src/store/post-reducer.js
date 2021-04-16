const CHANGE_POST_MESSAGE = 'CHANGE_POST_MESSAGE';
const ADD_POST = 'ADD-POST';

const postReducer = (action, state) => {
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

export { postReducer, changePostMessageCreator, addPostCreator };
