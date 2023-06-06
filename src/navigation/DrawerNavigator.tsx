import { useEffect, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as SplashScreen from "expo-splash-screen";

import type { Category, DrawerParamList } from "../interfaces";
import Meals from "../screens/Meals";
import Categories from "../screens/Categories";
import { MealService } from "../services/mealService";

void SplashScreen.preventAutoHideAsync();

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await MealService.getCategories();
        setCategories(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        void SplashScreen.hideAsync();
      }
    }
    void fetchCategories();
  }, []);

  if (!categories.length) return null;

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Categories"
        component={Categories}
        options={{ drawerItemStyle: { display: "none" } }}
        initialParams={{ list: categories }}
      />
      {categories.map(({ idCategory, strCategory }) => (
        <Drawer.Screen
          key={idCategory}
          name={strCategory as "Meals"}
          component={Meals}
          initialParams={{ category: strCategory }}
        />
      ))}
    </Drawer.Navigator>
  );
}
