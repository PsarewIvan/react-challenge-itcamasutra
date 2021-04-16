import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Store } from './store/Store';
import 'normalize.css';
import './index.css';

const renderApp = (state, dispatch) => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App data={state} dispatch={dispatch} />
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

new Store(renderApp);
