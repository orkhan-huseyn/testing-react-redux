import React from "react";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import { Provider } from "react-redux";
import rootReducer from "reducers";

export default function({ children, initialState = {} }) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxPromise)
  );

  return <Provider store={store}>{children}</Provider>;
}
