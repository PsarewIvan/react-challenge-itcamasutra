import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Store } from './store/Store';
import 'normalize.css';
import './index.css';

const renderApp = (state, dispatch) => {
  ReactDOM.render(
    <React.StrictMode>
      <App data={state} dispatch={dispatch} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

new Store(renderApp);
