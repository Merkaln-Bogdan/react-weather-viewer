import { wrapperProvider } from "helpers/testHelpers/wrapperProvider";

import { Board } from "./Board";

describe("render Board page", () => {
  it("Should render Board component", () => {
    wrapperProvider(<Board />);
  });

  it("Should render title", () => {
    const { getByText } = wrapperProvider(<Board />);

    const title = getByText(/weather viewer/i);

    expect(title).toBeInTheDocument();
  });
});
