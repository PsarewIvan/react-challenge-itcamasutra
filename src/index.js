import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mockData, addMessage } from './mockData/mockData';
import 'normalize.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App data={mockData} addMessage={addMessage} />
  </React.StrictMode>,
  document.getElementById('root')
);
