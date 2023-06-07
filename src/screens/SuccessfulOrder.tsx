import { Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useAtom } from "jotai";

import type { SuccessfulOrderRouteProps } from "../interfaces";
import { selectedItemsAtom } from "../store";
import Button from "../components/common/Button";

export default function SuccessfulOrder() {
  const [, setItems] = useAtom(selectedItemsAtom);
  const { navigate } = useNavigation();
  const {
    params: { subtotal },
  } = useRoute() as SuccessfulOrderRouteProps;

  function goHomeAndCleanUp() {
    navigate("Categories" as never);
    setItems([]);
  }

  return (
    <View className="flex-1 items-center justify-center bg-white pt-2">
      <StatusBar style="auto" />
      <Text className="m-3 text-center text-4xl font-semibold">Thank you for your purchase!</Text>
      <Text className="m-3 mb-10 text-center text-3xl">{`You've been charged $${subtotal}`}</Text>
      <Ionicons name="restaurant-outline" size={100} color="black" />
      <Button title="Go Home" onPress={goHomeAndCleanUp} />
    </View>
  );
}
