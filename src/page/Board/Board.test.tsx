import { wrapperProvider } from "helpers/testHelpers/wrapperProvider";
import { Board } from "./Board";

describe("render Board page", () => {
  it("Should render Board component", () => {
    wrapperProvider(<Board />);
  });
});
