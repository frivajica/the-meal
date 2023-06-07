import { Text, View } from "react-native";
import Button from "../common/Button";
import { Entypo } from "@expo/vector-icons";

export default function CartSummary({ subtotal }: { subtotal: number }) {
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
          testID="checkout-button"
          icon={<Entypo name="price-tag" size={24} color="white" />}
          onPress={() => ({})}
        />
      </View>
    </View>
  );
}
