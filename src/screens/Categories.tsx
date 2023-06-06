import { ScrollView, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import type { CategoriesRouteProps } from "../interfaces";
import CategoryCard from "../components/CategoryCard";

export default function Categories() {
  const navigation = useNavigation();
  const {
    params: { list },
  } = useRoute() as CategoriesRouteProps;

  return (
    <ScrollView className="bg-white">
      <StatusBar style="auto" />
      <View className="mx-auto flex flex-row flex-wrap">
        {list.map(({ strCategory, strCategoryThumb }) => (
          <CategoryCard
            key={strCategory}
            title={strCategory}
            img={strCategoryThumb}
            onPress={() => navigation.navigate(strCategory as never)}
          />
        ))}
      </View>
    </ScrollView>
  );
}
