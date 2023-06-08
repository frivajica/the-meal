import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import CartItem from "./CartItem";

describe("CartItem component", () => {
  const mockItem = {
    id: "1",
    title: "Sample Item",
    img: "../path/to/image.jpg",
    price: 10.99,
    quantity: 1,
    onChange: jest.fn(),
    onDebounceStart: jest.fn(),
  };

  it("renders correctly", () => {
    const { getByText, getByTestId } = render(<CartItem {...mockItem} />);

    expect(getByText("Sample Item")).toBeTruthy();
    expect(getByText("$10.99")).toBeTruthy();
    expect(getByTestId("remove-button")).toBeTruthy();
  });

  it("calls onRemove when remove button is pressed", async () => {
    const { getByTestId } = render(<CartItem {...mockItem} />);
    const removeButton = getByTestId("remove-button");

    fireEvent.press(removeButton);

    await waitFor(() => expect(mockItem.onChange).toHaveBeenCalledWith({ id: "1", quantity: 0 }));
  });
});
