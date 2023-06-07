import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useStripe } from "@stripe/stripe-react-native";

import type { CartSummaryProps } from "../../interfaces";
import { PaymentService } from "../../services/paymentService";
import Button from "../common/Button";
import { useNavigation } from "@react-navigation/native";

export default function CartSummary({ subtotal }: CartSummaryProps) {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(true);
  const { navigate } = useNavigation();

  useEffect(() => {
    void initializePaymentSheet();
  }, [subtotal]);

  async function initializePaymentSheet() {
    try {
      setLoading(true);
      const { data } = await PaymentService.getSheetParams(subtotal);
      const { paymentIntent, ephemeralKey, customer } = data;

      await initPaymentSheet({
        style: "alwaysLight",
        customerId: customer,
        customerEphemeralKeySecret: ephemeralKey,
        paymentIntentClientSecret: paymentIntent,
        allowsDelayedPaymentMethods: true,
        merchantDisplayName: "Example, Inc.",
        defaultBillingDetails: {
          email: "example@example.com",
          phone: "3743913",
          address: {
            city: "Example City",
            country: "Example Country",
            line1: "Example St.",
            line2: "Example Home #",
            postalCode: "Example PC",
            state: "Example State",
          },
          name: "Jane Doe",
        },
      });
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  async function openPaymentSheet() {
    const { error } = await presentPaymentSheet();

    if (error) return;
    navigate("SuccessfulOrder" as never, { screen: "SuccessfulOrder", subtotal } as never);
  }

  return (
    <View className="mx-4 mt-10 px-10">
      <View className="flex flex-row justify-between px-10">
        <Text className="text-xl text-icon_Gray">Subtotal</Text>
        <Text className="text-xl font-semibold text-icon_Gray">{`$${subtotal}`}</Text>
      </View>
      <View className="my-4 flex items-center">
        <Button
          className="rounded-full bg-slate-400"
          title="Checkout!"
          loading={loading}
          testID="checkout-button"
          icon={<Entypo name="price-tag" size={24} color="white" />}
          onPress={openPaymentSheet}
        />
      </View>
    </View>
  );
}
