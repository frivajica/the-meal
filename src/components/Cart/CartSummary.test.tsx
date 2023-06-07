import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { useStripe } from "@stripe/stripe-react-native";
import { PaymentService } from "../../services/paymentService";
import CartSummary from "./CartSummary";
import { useNavigation } from "@react-navigation/native";

jest.mock("@stripe/stripe-react-native", () => ({
  useStripe: jest.fn(() => ({
    presentPaymentSheet: jest.fn(),
  })),
}));

jest.mock("../../services/paymentService", () => ({
  PaymentService: {
    getSheetParams: jest.fn(),
  },
}));

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(() => ({
    navigate: jest.fn(),
  })),
}));

describe("CartSummary component", () => {
  const mockInitPaymentSheet = jest.fn();
  const mockPresentPaymentSheet = jest.fn();
  const mockNavigate = jest.fn();

  const mockUseStripe = useStripe as jest.Mock;
  const mockUseNavigation = useNavigation as jest.Mock;
  const mockPaymentService = PaymentService.getSheetParams as jest.Mock;

  const mockSubtotal = 100;

  beforeEach(() => {
    mockUseStripe.mockReturnValue({
      initPaymentSheet: mockInitPaymentSheet,
      presentPaymentSheet: mockPresentPaymentSheet,
    });
    mockUseNavigation.mockReturnValue({ navigate: mockNavigate });
    mockPaymentService.mockReturnValue({ data: { customer: "someCustomer" } });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", async () => {
    const result = render(<CartSummary subtotal={mockSubtotal} />);
    await waitFor(() => result);

    expect(result.getByTestId("checkout-button")).toBeTruthy();
  });

  it("initializes payment sheet on subtotal change", async () => {
    render(<CartSummary subtotal={mockSubtotal} />);

    await waitFor(() => expect(mockInitPaymentSheet).toHaveBeenCalledTimes(1));

    expect(mockInitPaymentSheet).toHaveBeenCalledWith(
      expect.objectContaining({ customerId: expect.any(String) })
    );
  });

  it("opens payment sheet on button press", async () => {
    mockPresentPaymentSheet.mockResolvedValue({ error: null });

    const result = render(<CartSummary subtotal={mockSubtotal} />);

    await waitFor(() => result);
    fireEvent.press(result.getByTestId("checkout-button"));
    expect(mockPresentPaymentSheet).toHaveBeenCalledTimes(1);

    await waitFor(() => result);
    expect(mockNavigate).toHaveBeenCalledWith("SuccessfulOrder", {
      screen: "SuccessfulOrder",
      subtotal: mockSubtotal,
    });
  });
});
