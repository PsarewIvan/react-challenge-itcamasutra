import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import AppContainer from './AppContainer';
import 'normalize.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/react-challenge-itcamasutra/">
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
