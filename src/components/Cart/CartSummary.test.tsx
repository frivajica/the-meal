import React from "react";
import { render } from "@testing-library/react-native";
import CartSummary from "./CartSummary";

describe("CartSummary component", () => {
  const mockSubtotal = 19.99;

  it("renders correctly", () => {
    const { getByText, getByTestId } = render(<CartSummary subtotal={mockSubtotal} />);

    // Check if subtotal text is rendered correctly
    expect(getByText("Subtotal")).toBeTruthy();

    // Check if subtotal value is rendered correctly
    expect(getByText("$19.99")).toBeTruthy();

    // Check if checkout button is rendered
    expect(getByTestId("checkout-button")).toBeTruthy();
  });

  // it('calls onPress when checkout button is pressed', () => {
  //   const mockOnPress = jest.fn();
  //   const { getByTestId } = render(
  //     <CartSummary subtotal={mockSubtotal} onPress={mockOnPress} />
  //   );
  //   const checkoutButton = getByTestId('checkout-button');

  //   fireEvent.press(checkoutButton);

  //   // Check if onPress is called
  //   expect(mockOnPress).toHaveBeenCalled();
  // });
});
