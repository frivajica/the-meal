import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { Image } from "expo-image";

import type { ProductCardProps } from "../interfaces";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ProductCard({
  id,
  title,
  img,
  price,
  selected,
  onSelect,
}: ProductCardProps) {
  return (
    <View className="m-2 w-[45vw] rounded-md bg-light_Gray p-2">
      <Image source={img} contentFit="fill" className="h-[150px] w-full flex-1" />
      <Text className="mt-1 text-base">{title}</Text>
      <View className="mt-1 flex flex-row items-center justify-between">
        <Text className="my-auto text-xl">{`$${price}`}</Text>
        <TouchableOpacity onPress={() => onSelect(id)}>
          {selected ? (
            <MaterialCommunityIcons name="cart-remove" size={24} color="#d86464" />
          ) : (
            <MaterialCommunityIcons name="cart-plus" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
