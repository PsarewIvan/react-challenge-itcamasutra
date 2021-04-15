import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

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

export { renderApp };
