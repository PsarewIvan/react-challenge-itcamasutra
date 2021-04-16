import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store from './redux/redux-store';
import 'normalize.css';
import './index.css';

const renderApp = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App state={state} dispatch={store.dispatch} />
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

renderApp(store.getState());

store.subscribe(() => {
  renderApp(store.getState());
});
