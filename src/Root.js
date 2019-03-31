import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "reducers";

export default function({ children }) {
  return (
    <Provider store={createStore(rootReducer, {},
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )}>
      {children}
    </Provider>
  );
}
