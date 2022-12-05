import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "jest-styled-components";
import { render } from "@testing-library/react";

import { Provider } from "react-redux";

import { store } from "redux/store";

const wrapperProvider = (children: React.ReactElement) =>
  render(
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>
  );

export { wrapperProvider };
