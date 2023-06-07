import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CartItem from "./CartItem";

describe("CartItem component", () => {
  const mockItem = {
    id: "1",
    title: "Sample Item",
    img: "../path/to/image.jpg",
    price: 10.99,
    onRemove: jest.fn(),
  };

  it("renders correctly", () => {
    const { getByText, getByTestId } = render(<CartItem {...mockItem} />);

    expect(getByText("Sample Item")).toBeTruthy();
    expect(getByText("$10.99")).toBeTruthy();
    expect(getByTestId("remove-button")).toBeTruthy();
  });

  it("calls onRemove when remove button is pressed", () => {
    const { getByTestId } = render(<CartItem {...mockItem} />);
    const removeButton = getByTestId("remove-button");

    fireEvent.press(removeButton);

    // Check if onRemove is called with the correct id
    expect(mockItem.onRemove).toHaveBeenCalledWith("1");
  });
});
