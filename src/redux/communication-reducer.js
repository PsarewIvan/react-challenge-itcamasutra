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
  const newState = { ...state };
  switch (action.type) {
    case CHANGE_NEW_MESSAGE:
      newState.userMessageText = action.newMessage;
      return newState;
    case ADD_MESSAGE:
      const newId = newState.messages[newState.messages.length - 1].id + 1;
      const newMessageText = newState.userMessageText;
      const newMessage = {
        id: newId,
        message: newMessageText,
      };
      newState.messages.push(newMessage);
      newState.userMessageText = '';
      return newState;
    default:
      return newState;
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
