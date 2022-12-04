import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "jest-styled-components";

import { Provider } from "react-redux";

import { store } from "redux/store";

const wrapperProvider = (tree: React.ReactElement) => (
  <Provider store={store}>
    <Router>{tree}</Router>
  </Provider>
);

export { wrapperProvider };
