const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';

const messageReducer = (action, state) => {
  switch (action.type) {
    case CHANGE_NEW_MESSAGE:
      state.userMessageText = action.newMessage;
      return state;
    case ADD_MESSAGE:
      const newId = state.messages[state.messages.length - 1].id + 1;
      const newMessageText = state.userMessageText;
      const newMessage = {
        id: newId,
        message: newMessageText,
      };
      state.messages.push(newMessage);
      state.userMessageText = '';
      return state;
    default:
      return state;
  }
};

const changeNewMessageCreator = (message) => {
  return {
    type: CHANGE_NEW_MESSAGE,
    newMessage: message,
  };
};

const addMessageCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export { messageReducer, changeNewMessageCreator, addMessageCreator };
