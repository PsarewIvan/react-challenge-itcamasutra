const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';

const CHANGE_POST_MESSAGE = 'CHANGE_POST_MESSAGE';
const ADD_POST = 'ADD-POST';

class Store {
  constructor(observer) {
    this._state = {
      communication: {
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
      },
      profile: {
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
      },
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
    };
    this._observer = observer;
    this._callObserver();
  }

  dispatch(action) {
    if (action.type === CHANGE_NEW_MESSAGE) {
      this._state.communication.userMessageText = action.newMessage;
    }

    if (action.type === ADD_MESSAGE) {
      const newId =
        this._state.communication.messages[this.messagesLength - 1].id + 1;
      const newMessageText = this._state.communication.userMessageText;
      const newMessage = {
        id: newId,
        message: newMessageText,
      };
      this._state.communication.messages.push(newMessage);
      this._state.communication.userMessageText = '';
    }

    if (action.type === CHANGE_POST_MESSAGE) {
      this._state.profile.userPostText = action.newMessage;
    }

    if (action.type === ADD_POST) {
      const newId = this._state.profile.posts[this.postsLength - 1].id + 1;
      const newMessageText = this._state.profile.userPostText;
      const newMessage = {
        id: newId,
        message: newMessageText,
      };
      this._state.profile.posts.push(newMessage);
      this._state.profile.userPostText = '';
    }

    this._callObserver();
  }

  _callObserver() {
    this._observer(this.state, this.dispatch.bind(this));
  }

  get state() {
    return this._state;
  }

  get messagesLength() {
    return this._state.communication.messages.length;
  }

  get postsLength() {
    return this._state.profile.posts.length;
  }
}

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

export {
  Store,
  changeNewMessageCreator,
  addMessageCreator,
  changePostMessageCreator,
  addPostCreator,
};
