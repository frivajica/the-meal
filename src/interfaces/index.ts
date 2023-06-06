import type { ReactNode } from "react";
import type { ButtonProps } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RouteProp } from "@react-navigation/native";

export interface CustomButtonProps extends ButtonProps {
  loading?: boolean;
  children?: ReactNode;
  icon?: ReactNode;
  onPress: () => unknown;
}

export type AppStackParamList = {
  Home: undefined;
  ShoppingCart: undefined;
};

export interface ShoppingCartScreenProps
  extends NativeStackScreenProps<AppStackParamList, "ShoppingCart"> {}
export interface HomeScreenProps extends NativeStackScreenProps<AppStackParamList, "Home"> {}

export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export type DrawerParamList = {
  Categories: { list: Category[] };
  Meals: { category: string };
};
export type CategoriesRouteProps = RouteProp<DrawerParamList, "Categories">;
export interface MealsRouteProps extends RouteProp<DrawerParamList, "Meals"> {}

export interface Meal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
  price: number;
}
