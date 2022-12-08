import { wrapperProvider } from "helpers/testHelpers/wrapperProvider";

import { Details } from "./Details";

describe("Details", () => {
  it("Should render Details component", async () => {
    wrapperProvider(<Details />);
  });

  it("diplay loader", () => {
    const { getByText } = wrapperProvider(<Details />);

    const loader = getByText(/Loading.../i);

    expect(loader).toBeInTheDocument();
  });
});
