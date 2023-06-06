import { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useAtom } from "jotai";
import { Ionicons } from "@expo/vector-icons";

import type { Meal, MealsRouteProps, SelectedItem } from "../interfaces";
import { MealService } from "../services/mealService";
import MealCard from "../components/ProductCard";
import Button from "../components/common/Button";
import { selectedItemsAtom } from "../store";

export default function Meals() {
  const { navigate } = useNavigation();
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedItems, setSelectedItems] = useAtom(selectedItemsAtom);
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

  function handleSelect(item: SelectedItem) {
    const index = selectedItems.findIndex(({ id }) => id === item.id);
    if (index === -1) {
      setSelectedItems([...selectedItems, item]);
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
          icon={<Ionicons name="return-up-back" size={25} color="white" />}
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
            selected={selectedItems.findIndex(({ id }) => id === idMeal) > -1}
            onSelect={handleSelect}
          />
        ))}
      </View>
    </ScrollView>
  );
}
