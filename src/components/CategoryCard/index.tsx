import { Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";

import type { CategoryCardProps } from "../../interfaces";

export default function CategoryCard({ title, img, onPress }: CategoryCardProps) {
  return (
    <TouchableOpacity
      testID="category-card"
      className="m-2 h-[150px] w-[45vw] rounded-md bg-light_Gray p-2"
      onPress={onPress}
      style={{ shadowColor: "#b0b0b0", elevation: 3 }}
    >
      <Image testID="category-image" source={img} className="h-full w-full flex-1" />
      <Text className="mt-1 text-base">{title}</Text>
    </TouchableOpacity>
  );
}
