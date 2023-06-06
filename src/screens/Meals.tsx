import { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation, useRoute } from "@react-navigation/native";

import type { Meal, MealsRouteProps } from "../interfaces";
import { MealService } from "../services/mealService";
import MealCard from "../components/ProductCard";
import Button from "../components/common/Button";

export default function Meals() {
  const { navigate } = useNavigation();
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const {
    params: {
      category: { strCategory },
    },
  } = useRoute() as MealsRouteProps;

  useEffect(() => {
    async function fetchMealsByCategory() {
      try {
        const { data } = await MealService.getMealsByCategory(strCategory);
        setMeals(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    void fetchMealsByCategory();
  }, []);

  function handleSelect(id: string) {
    const index = selectedItems.indexOf(id);
    if (index === -1) {
      setSelectedItems([...selectedItems, id]);
    } else {
      const selected = [...selectedItems];
      selected.splice(index, 1);
      setSelectedItems([...selected]);
    }
  }

  if (loading) return null;

  return (
    <ScrollView>
      <StatusBar style="auto" />
      <View className="mt-4 flex items-center">
        <Button
          className="w-[75%] rounded-full bg-slate-400"
          title="Go Back to Categories"
          onPress={() => navigate("Categories" as never)}
        />
      </View>
      <View className="mx-auto flex flex-row flex-wrap">
        {meals.map(({ idMeal, strMeal, strMealThumb, price }) => (
          <MealCard
            key={idMeal}
            id={idMeal}
            title={strMeal}
            img={strMealThumb}
            price={price}
            selected={selectedItems.includes(idMeal)}
            onSelect={handleSelect}
          />
        ))}
      </View>
    </ScrollView>
  );
}
