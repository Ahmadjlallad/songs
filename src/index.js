import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// * NOTE: Provider is a react component that is used to wrap the entire application
import { createStore } from "redux";
import MyReducers from "./reducers";
import App from "./Component/App";
// * FIXME: import the reducers and import Provider from react-redux and
// * createStore from redux and warp App component with Provider + pass stor as prop to Provider
// * FIXME: with createStore in the props with are reducer as argument 4 + 5 *
// const composeEnhancers =
//   (typeof window !== "undefined" &&
//     +window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

ReactDOM.render(
  <Provider
    store={createStore(
      MyReducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <App />
  </Provider>,
  document.getElementById("root")
);
