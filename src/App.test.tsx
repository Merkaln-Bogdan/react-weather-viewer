import { Provider } from "react-redux";
import { store } from "redux/store";
import { BrowserRouter as Router } from "react-router-dom";

import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("Should display a default value", () => {
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
  });
});
