import { Provider } from "react-redux";

import { render } from "@testing-library/react";
import { Board } from "./Board";
import { store } from "redux/store";

describe("render Board page", () => {
  it("Should render Board component", () => {
    render(
      <Provider store={store}>
        <Board />
      </Provider>
    );
  });
});
