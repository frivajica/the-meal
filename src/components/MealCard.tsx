import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";

import type { ProductCardProps } from "../interfaces";
import { memo } from "react";

function MealCard({ id, title, img, price, selected, onSelect }: ProductCardProps) {
  return (
    <View
      style={{ shadowColor: "#eaeaea", elevation: 3 }}
      className="m-2 w-44 rounded-md bg-light_Gray p-2"
    >
      <View className="h-40 w-40">
        <Image source={img} className="flex-1 rounded-sm rounded-t" />
      </View>
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

export default memo(MealCard);
