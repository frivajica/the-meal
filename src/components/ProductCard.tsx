import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";

import type { ProductCardProps } from "../interfaces";

export default function ProductCard({
  id,
  title,
  img,
  price,
  selected,
  onSelect,
}: ProductCardProps) {
  return (
    <View
      style={{ shadowColor: "#eaeaea", elevation: 3 }}
      className="m-2 w-[45%] rounded-md bg-light_Gray p-2"
    >
      <Image
        source={img}
        contentFit="fill"
        className="h-[150px] w-full flex-1 rounded-sm rounded-t"
      />
      <Text className="mt-1 text-base">{title}</Text>
      <View className="mt-1 flex flex-row items-center justify-between">
        <Text className="my-auto text-xl">{`$${price}`}</Text>
        <TouchableOpacity onPress={() => onSelect({ id, title, img, price })}>
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
