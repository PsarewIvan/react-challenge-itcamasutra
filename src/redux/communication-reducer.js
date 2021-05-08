const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {
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
  photos: {
    small: null,
    large: null,
  },
};

const communicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        id: state.messages[state.messages.length - 1].id + 1,
        message: state.userMessageText,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        userMessageText: '',
      };

    default:
      return state;
  }
};

const addMessage = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export { communicationReducer, addMessage };
