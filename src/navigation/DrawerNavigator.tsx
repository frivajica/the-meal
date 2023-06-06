import { useEffect, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as SplashScreen from "expo-splash-screen";

import type { Category, DrawerParamList } from "../interfaces";
import Meals from "../screens/Meals";
import Categories from "../screens/Categories";
import { MealService } from "../services/mealService";
import HeaderRight from "../components/common/HeaderRight";

void SplashScreen.preventAutoHideAsync();

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const { data } = await MealService.getCategories();
        setCategories(data);
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
    <Drawer.Navigator screenOptions={{ headerRight: HeaderRight }}>
      <Drawer.Screen
        name="Categories"
        component={Categories}
        options={{ drawerItemStyle: { display: "none" } }}
        initialParams={{ list: categories }}
      />
      {categories.map(category => (
        <Drawer.Screen
          key={category.idCategory}
          name={category.strCategory as "Meals"}
          component={Meals}
          initialParams={{ category }}
        />
      ))}
    </Drawer.Navigator>
  );
}
