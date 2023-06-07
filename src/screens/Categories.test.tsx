import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Categories from "./Categories";

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
  useRoute: jest.fn(),
}));

const useNavigationMock = useNavigation as jest.Mock;
const useRouteMock = useRoute as jest.Mock;

describe("Categories screen", () => {
  const mockNavigation = {
    navigate: jest.fn(),
  };

  const mockRoute = {
    params: {
      list: [
        {
          strCategory: "Category 1",
          strCategoryThumb: "../path/to/image1.jpg",
        },
        {
          strCategory: "Category 2",
          strCategoryThumb: "../path/to/image2.jpg",
        },
        // Additional mock category objects
      ],
    },
  };

  beforeEach(() => {
    useNavigationMock.mockReturnValue(mockNavigation);
    useRouteMock.mockReturnValue(mockRoute);
  });

  it("renders correctly", () => {
    const { getByText } = render(<Categories />);

    // Check if category titles are rendered correctly
    expect(getByText("Category 1")).toBeTruthy();
    expect(getByText("Category 2")).toBeTruthy();
  });

  it("navigates to the selected category when a category card is pressed", () => {
    const { queryAllByTestId } = render(<Categories />);
    const categoryCard = queryAllByTestId("category-card");

    fireEvent.press(categoryCard[0]);

    // Check if navigation.navigate is called with the correct arguments
    expect(mockNavigation.navigate).toHaveBeenCalledWith("Category 1");
  });
});
