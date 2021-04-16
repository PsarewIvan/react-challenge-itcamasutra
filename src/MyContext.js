import React from 'react';

const Context = React.createContext(null);

const Provider = (props) => {
  return (
    <Context.Provider value={props.store}>{props.children}</Context.Provider>
  );
};

export { Provider, Context };
