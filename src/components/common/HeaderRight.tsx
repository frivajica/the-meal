import { Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useAtom } from "jotai";

import { selectedItemsAtom } from "../../store";

export default function HeaderRight() {
  const { navigate } = useNavigation();
  const [items] = useAtom(selectedItemsAtom);

  return (
    <TouchableOpacity
      className="mr-5"
      onPress={() => navigate("ShoppingCart" as never, { screen: "ShoppingCart" } as never)}
    >
      {!!items.length && (
        <View className="absolute z-10 inline-flex items-center rounded px-2.5 py-1.5 text-xs font-medium">
          <View className="items absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-soft_Red">
            <Text className="text-center text-xs text-white">{items.length}</Text>
          </View>
        </View>
      )}
      <MaterialCommunityIcons name="cart-outline" size={24} color="black" />
    </TouchableOpacity>
  );
}
