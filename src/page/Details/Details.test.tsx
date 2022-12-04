import { Provider } from "react-redux";

import { render } from "@testing-library/react";
import { Details } from "./Details";
import { store } from "redux/store";

describe("Details", () => {
  it("Should render Details component", () => {
    render(
      <Provider store={store}>
        <Details />
      </Provider>
    );
  });
});
