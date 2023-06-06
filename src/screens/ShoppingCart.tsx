import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

// export default function ShoppingCart({ navigation }: ShoppingCartScreenProps) {
export default function ShoppingCart() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <StatusBar style="auto" />

      <Text>Shopping Cart</Text>
    </View>
  );
}
