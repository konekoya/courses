import React from "react";
import "jest-dom/extend-expect";
import {
  render,
  fireEvent,
  waitForElement,
  cleanup
} from "react-testing-library";

import Input from "./Input";

afterEach(cleanup);

describe("<Input />", () => {
  it("renders", async () => {
    const { getByText, getByTestId } = render(<Input />);
    await waitForElement(() => getByText("Email"));
    await waitForElement(() => getByTestId("icon-wrapper"));
  });

  it("fails with wrong user email", async () => {
    const { getByLabelText, getByTestId } = render(<Input />);

    const emailAddr = "wrong@email.com.tw";

    const input = getByLabelText("Email");
    fireEvent.change(input, {
      target: { value: emailAddr }
    });

    fireEvent.submit(getByTestId("form"));

    expect(input.value).toBe(emailAddr);

    expect(getByTestId("icon-wrapper")).toHaveClass("error");
    expect(getByTestId("label")).toHaveClass("is-failed");
  });
});
