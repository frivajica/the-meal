import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

import { Text, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";

import type { CartItemProps } from "../../interfaces";
import { useEffect, useState } from "react";

export default function CartItem({
  id,
  title,
  img,
  price,
  quantity: initialQuantity,
  onChange,
  onDebounceStart,
}: CartItemProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  // Sync quantity with external records.
  useEffect(() => {
    setQuantity(initialQuantity);
  }, [initialQuantity]);

  // Debounce quantity.
  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange({ id, quantity });
    }, 500);

    return () => clearTimeout(timeout);
  }, [quantity]);

  if (!quantity) return null;

  return (
    <View
      style={{ shadowColor: "#b0b0b0", elevation: 3 }}
      className="flex w-full flex-row rounded-md bg-light_Gray"
    >
      <View className="flex w-[40%] justify-around p-4">
        <Text className="overflow-clip text-base">{title}</Text>
        <View className="flex flex-row items-center justify-between py-4 align-middle">
          <TouchableOpacity
            className="flex h-10 w-10 items-center justify-center"
            testID="minus-button"
            onPress={() => {
              if (quantity === 99) return;
              onDebounceStart();
              setQuantity(quantity - 1);
            }}
          >
            <Entypo name="minus" size={24} color="black" />
          </TouchableOpacity>
          <Text className="w-8 text-center text-xl">{quantity}</Text>
          <TouchableOpacity
            className="flex h-10 w-10 items-center justify-center"
            testID="plus-button"
            onPress={() => {
              onDebounceStart();
              setQuantity(quantity + 1);
            }}
          >
            <Entypo name="plus" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex flex-row items-center justify-between gap-7 pt-2">
          <Text className="my-auto text-[22px]">{`$${price}`}</Text>
          <TouchableOpacity
            testID="remove-button"
            onPress={() => {
              onDebounceStart();
              setQuantity(0);
            }}
          >
            <MaterialCommunityIcons name="cart-remove" size={20} color="#d86464" />
          </TouchableOpacity>
        </View>
      </View>
      <Image source={img} className="h-full w-[60%] rounded-r-md" />
    </View>
  );
}
