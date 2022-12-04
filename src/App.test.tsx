import { wrapperProvider } from "helpers/testHelpers/wrapperProvider";
import App from "./App";

describe("App", () => {
  it("Should display a default value", () => {
    wrapperProvider(<App />);
  });
});
