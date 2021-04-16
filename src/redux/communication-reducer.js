const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {
  userMessageText: '',
  messagePlaceholder: 'Write a message...',
  dialogs: [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Anna Bell' },
    { id: 3, name: 'Lori Chase' },
    { id: 4, name: 'Ken Lee' },
  ],
  messages: [
    { id: 1, message: 'First message' },
    { id: 2, message: 'Second message' },
    { id: 3, message: 'Another message' },
  ],
};

const communicationReducer = (state = initialState, action) => {
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

export { communicationReducer, changeNewMessageCreator, addMessageCreator };
