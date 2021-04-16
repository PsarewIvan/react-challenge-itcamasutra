const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';

class Store {
  constructor(observer) {
    this._constants = {
      MESSAGE_PLACEHOLDER: 'Write a message...',
    };
    this._state = {
      currentUserId: 1,
      messages: [
        { id: 1, message: 'First message' },
        { id: 2, message: 'Second message' },
        { id: 3, message: 'Another message' },
      ],
      userMessageText: '',
      messagePlaceholder: this._constants.MESSAGE_PLACEHOLDER,
      users: [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Sam Sam' },
        { id: 3, name: 'Admin' },
        { id: 4, name: 'Alexander Alexandrovich' },
        { id: 5, name: 'Superman' },
        { id: 6, name: 'Batman' },
        { id: 7, name: 'Ken Lee' },
        { id: 8, name: 'Lori Chase' },
      ],
      dialogs: [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Anna Bell' },
        { id: 3, name: 'Lori Chase' },
        { id: 4, name: 'Ken Lee' },
      ],
      posts: [
        { id: 1, message: 'First post', likeCount: '5' },
        { id: 2, message: 'Second post', likeCount: '1' },
        { id: 3, message: 'Another post', likeCount: '10' },
      ],
      profileItems: [
        { id: 1, name: 'Friends', number: '1' },
        { id: 2, name: 'Groups', number: '3' },
      ],
    };
    this._observer = observer;
    this._callObserver();
  }

  dispatch(action) {
    if (action.type === CHANGE_NEW_MESSAGE) {
      this._changeNewMessage(action.newMessage);
    }
    if (action.type === ADD_MESSAGE) {
      this._addMessage();
    }
  }

  _callObserver() {
    this._observer(this.state, this.dispatch.bind(this));
  }

  _changeNewMessage(message) {
    this._state.userMessageText = message;
    this._callObserver();
  }

  _addMessage() {
    const newId = this._state.messages[this._state.messages.length - 1].id + 1;
    const newMessageText = this._state.userMessageText;
    const newMessage = {
      id: newId,
      message: newMessageText,
    };
    this._state.messages.push(newMessage);
    this._state.userMessageText = '';
    this._callObserver();
  }

  get state() {
    return this._state;
  }
}

const changeNewMessageActionCreator = (message) => {
  return {
    type: CHANGE_NEW_MESSAGE,
    newMessage: message,
  };
};

const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export { Store, changeNewMessageActionCreator, addMessageActionCreator };
