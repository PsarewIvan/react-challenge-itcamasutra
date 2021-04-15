import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const renderApp = (state, addMessage) => {
  ReactDOM.render(
    <React.StrictMode>
      <App data={state} addMessage={addMessage} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

export { renderApp };
