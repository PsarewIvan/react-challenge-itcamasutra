import { messageReducer } from './message-reducer';
import { postReducer } from './post-reducer';

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
    messageReducer(action, this.state.communication);
    postReducer(action, this.state.profile);

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

export default Store;
