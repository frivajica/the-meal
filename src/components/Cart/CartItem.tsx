import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";

import type { CartItemProps } from "../../interfaces";

export default function CartItem({ id, title, img, price, onRemove }: CartItemProps) {
  return (
    <View
      style={{ shadowColor: "#b0b0b0", elevation: 3 }}
      className="flex w-full flex-row rounded-md bg-light_Gray"
    >
      <View className="flex w-[40%] justify-around p-4">
        <Text className="overflow-clip text-base">{title}</Text>
        <View className="flex flex-row items-center gap-7 pt-2">
          <Text className="my-auto text-xl">{`$${price}`}</Text>
          <TouchableOpacity onPress={() => onRemove(id)}>
            <MaterialCommunityIcons name="cart-remove" size={24} color="#d86464" />
          </TouchableOpacity>
        </View>
      </View>
      <Image source={img} className="h-full w-[60%] rounded-r-md" />
    </View>
  );
}
