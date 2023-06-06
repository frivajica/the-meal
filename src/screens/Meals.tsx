import { View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Button from "../components/common/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import type { Meal, MealsRouteProps } from "../interfaces";
import { MealService } from "../services/mealService";

export default function Meals() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { navigate } = useNavigation();
  const {
    params: { category },
  } = useRoute() as MealsRouteProps;

  useEffect(() => {
    async function fetchMealsByCategory() {
      try {
        const res = await MealService.getMealsByCategory(category);
        setMeals(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    void fetchMealsByCategory();
  }, []);

  if (loading) return null;

  return (
    <ScrollView>
      <StatusBar style="auto" />
      <View className="">
        <Button title="Go back to Categories" onPress={() => navigate("Categories" as never)} />

        {meals.map(({ idMeal, strMeal }) => (
          <Button key={idMeal} title={strMeal} onPress={() => ({})} />
        ))}
      </View>
    </ScrollView>
  );
}
