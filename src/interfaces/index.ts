import type { ReactNode } from "react";
import type { ButtonProps } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RouteProp } from "@react-navigation/native";

export interface CustomButtonProps extends ButtonProps {
  className?: string;
  loading?: boolean;
  children?: ReactNode;
  icon?: ReactNode;
  onPress: () => unknown;
}

export type AppStackParamList = {
  Home: undefined;
  ShoppingCart: undefined;
  SuccessfulOrder: { subtotal: number };
};

export interface ShoppingCartScreenProps
  extends NativeStackScreenProps<AppStackParamList, "ShoppingCart"> {}
export interface HomeScreenProps extends NativeStackScreenProps<AppStackParamList, "Home"> {}
export interface SuccessfulOrderScreenProps
  extends NativeStackScreenProps<AppStackParamList, "SuccessfulOrder"> {}

export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export type DrawerParamList = {
  Categories: { list: Category[] };
  Meals: { category: Category };
};
export type SuccessfulOrderRouteProps = RouteProp<AppStackParamList, "SuccessfulOrder">;
export type CategoriesRouteProps = RouteProp<DrawerParamList, "Categories">;
export interface MealsRouteProps extends RouteProp<DrawerParamList, "Meals"> {}

export interface Meal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
  price: number;
}

export interface CategoryCardProps {
  title: string;
  img: string;
  onPress: () => unknown;
}

export interface ProductCardProps {
  id: string;
  title: string;
  img: string;
  price: number;
  selected: boolean;
  onSelect: (item: SelectedItem) => unknown;
}

export interface SelectedItem {
  id: string;
  quantity: number;
  title: string;
  img: string;
  price: number;
}
export interface CartItemProps extends SelectedItem {
  id: string;
  title: string;
  img: string;
  price: number;
  onChange: (params: { id: string; quantity: number }) => unknown;
  onDebounceStart: () => unknown;
}

export interface CartSummaryProps {
  subtotal: number;
  loading?: boolean;
}
