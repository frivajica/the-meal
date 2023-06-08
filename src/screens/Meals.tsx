import { memo, useEffect, useMemo, useState } from "react";
import { View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useAtom } from "jotai";
import { Ionicons } from "@expo/vector-icons";

import type { Meal, MealsRouteProps, SelectedItem } from "../interfaces";
import { MealService } from "../services/mealService";
import MealCard from "../components/MealCard";
import Button from "../components/common/Button";
import { selectedItemsAtom } from "../store";
import { groupByTwo } from "../utils/group";

function Meals() {
  const { navigate } = useNavigation();
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedItems, setSelectedItems] = useAtom(selectedItemsAtom);
  const groupedMeals = useMemo(() => groupByTwo(meals), [meals]);
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
      setSelectedItems([...selectedItems, { ...item }]);
    } else {
      const selected = [...selectedItems];
      selected.splice(index, 1);
      setSelectedItems([...selected]);
    }
  }

  if (loading) return null;

  return (
    <View>
      <StatusBar style="auto" />
      <View>
        <FlatList
          className="w-full"
          data={groupedMeals}
          keyExtractor={group => group[0].idMeal}
          ListHeaderComponent={
            <View className="mt-4 flex items-center">
              <Button
                testID="meals-go-back-button"
                className="w-[75%] rounded-full bg-slate-400"
                title="Go Back to Categories"
                icon={<Ionicons name="return-up-back" size={25} color="white" />}
                onPress={() => navigate("Categories" as never)}
              />
            </View>
          }
          scrollIndicatorInsets={{ top: 1, bottom: 1 }}
          renderItem={({ item: group, index }) => (
            <View key={index} className="flex min-h-[225px] w-full flex-row">
              {group.map(({ idMeal, strMeal, strMealThumb, price }) => (
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
          )}
        />
      </View>
    </View>
  );
}

export default memo(Meals);
