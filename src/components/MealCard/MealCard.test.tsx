import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import MealCard from ".";

describe("MealCard component", () => {
  const mockMeal = {
    id: "1",
    title: "Sample Meal",
    img: "../../path/to/image.jpg",
    price: 9.99,
    selected: false,
    onSelect: jest.fn(),
  };

  it("renders correctly", () => {
    const { getByText, getByTestId } = render(<MealCard {...mockMeal} />);
    expect(getByText("Sample Meal")).toBeTruthy();
    expect(getByTestId("meal-image")).toBeTruthy();
    expect(getByText("$9.99")).toBeTruthy();
  });

  it("calls onSelect when add to cart button is pressed", () => {
    const { getByTestId } = render(<MealCard {...mockMeal} />);
    const addToCartButton = getByTestId("add-to-cart-button");

    fireEvent.press(addToCartButton);

    // Check if onSelect is called with the correct arguments
    expect(mockMeal.onSelect).toHaveBeenCalledWith({
      id: "1",
      title: "Sample Meal",
      img: "../../path/to/image.jpg",
      price: 9.99,
    });
  });

  it("calls onSelect when remove from cart button is pressed", () => {
    const { getByTestId } = render(<MealCard {...mockMeal} selected={true} />);
    const removeFromCartButton = getByTestId("remove-from-cart-button");

    fireEvent.press(removeFromCartButton);

    // Check if onSelect is called with the correct arguments
    expect(mockMeal.onSelect).toHaveBeenCalledWith({
      id: "1",
      title: "Sample Meal",
      img: "../../path/to/image.jpg",
      price: 9.99,
    });
  });
});
