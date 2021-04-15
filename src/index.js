import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './store/Store';
import 'normalize.css';
import './index.css';

const renderApp = (state, addMessage, changeNewMessage) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        data={state}
        addMessage={addMessage}
        changeNewMessage={changeNewMessage}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

new Store(renderApp);
