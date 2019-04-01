import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "reducers";

export default function({ children, initialState = {} }) {
  return (
    <Provider
      store={createStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
    >
      {children}
    </Provider>
  );
}
