import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import Button from "../components/common/Button";
import type { HomeScreenProps } from "../interfaces";

export default function Home({ navigation }: HomeScreenProps) {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <StatusBar style="auto" />
      <Text>Home</Text>
      <Button title="hi" onPress={() => navigation.navigate("ShoppingCart")} />
    </SafeAreaView>
  );
}
