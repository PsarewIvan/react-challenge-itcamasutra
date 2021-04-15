import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import mockData from './mockData/mockData';
import 'normalize.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App data={mockData} />
  </React.StrictMode>,
  document.getElementById('root')
);
