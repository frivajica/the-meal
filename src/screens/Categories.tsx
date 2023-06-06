import { ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import type { CategoriesRouteProps } from "../interfaces";
import Button from "../components/common/Button";

export default function Categories() {
  const navigation = useNavigation();
  const {
    params: { list },
  } = useRoute() as CategoriesRouteProps;

  return (
    <ScrollView>
      <StatusBar style="auto" />
      {list.map(({ strCategory }) => (
        <Button
          key={strCategory}
          title={strCategory}
          onPress={() => navigation.navigate(strCategory as never)}
        />
      ))}
    </ScrollView>
  );
}
