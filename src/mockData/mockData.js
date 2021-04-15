import { renderApp } from './../render';

const mockData = {
  currentUserId: 1,
  messages: [
    { id: 1, message: 'First message' },
    { id: 2, message: 'Second message' },
    { id: 3, message: 'Another message' },
  ],
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

const addMessage = (message) => {
  const newId = mockData.messages[mockData.messages.length - 1].id + 1;
  const newMessage = {
    id: newId,
    message: message,
  };
  mockData.messages.push(newMessage);
  renderApp(mockData, addMessage);
};

export { mockData, addMessage };
