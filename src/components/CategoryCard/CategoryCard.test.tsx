import { render, fireEvent } from "@testing-library/react-native";
import CategoryCard from "../CategoryCard";

describe("CategoryCard component", () => {
  const mockCategory = {
    title: "Sample Category",
    img: "../path/to/image.jpg",
    onPress: jest.fn(),
  };

  it("renders correctly", () => {
    const { getByText, getByTestId } = render(<CategoryCard {...mockCategory} />);

    expect(getByText("Sample Category")).toBeTruthy();
    expect(getByTestId("category-image")).toBeTruthy();
  });

  it("calls onPress when card is pressed", () => {
    const { getByTestId } = render(<CategoryCard {...mockCategory} />);
    const card = getByTestId("category-card");

    fireEvent.press(card);

    // Check if onPress is called
    expect(mockCategory.onPress).toHaveBeenCalled();
  });
});
