import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import App from './App';
import 'normalize.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App state={store.getState()} dispatch={store.dispatch} />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
