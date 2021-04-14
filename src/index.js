import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './App';

const mockData = {
  messages: [
    { id: 1, message: 'First message' },
    { id: 2, message: 'Second message' },
    { id: 3, message: 'Another message' },
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

ReactDOM.render(
  <React.StrictMode>
    <App data={mockData} />
  </React.StrictMode>,
  document.getElementById('root')
);
