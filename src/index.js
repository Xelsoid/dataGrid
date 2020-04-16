import React from "react";
import ReactDOM from "react-dom";
import Application from "@components/Application";
import { Provider } from 'react-redux';
import ErrorBoundary from "@components/ErrorBoundary";
import store from './store';

import "./styles/reset.css";
import "./styles/styles.scss";

// eslint-disable-next-line no-console
store.subscribe(() => console.log(store.getState()));
// console.log(store.getState());

const App = () => {
  return <Application />;
};

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById("rootContainer")
);
