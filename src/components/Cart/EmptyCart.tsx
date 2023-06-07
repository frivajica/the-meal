import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function EmptyCart() {
  return (
    <View className="flex-1 items-center justify-center bg-white pt-2">
      <StatusBar style="auto" />
      <Text className="m-3 text-center text-4xl font-semibold">It seems your cart is empty!</Text>
      <Text className="m-3 mb-10 text-center text-3xl">
        Explore the catalog to discover more delicious meals.
      </Text>
      <Ionicons name="restaurant-outline" size={100} color="black" />
    </View>
  );
}
