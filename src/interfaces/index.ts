import type { ReactNode } from "react";
import type { ButtonProps } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export interface CustomButtonProps extends ButtonProps {
  loading?: boolean;
  children?: ReactNode;
  icon?: ReactNode;
  onPress: () => unknown;
}

export interface HomeScreenProps extends NativeStackScreenProps<AppStackParamList, "Home"> {}

export type AppStackParamList = {
  Home: undefined;
  ShoppingCart: undefined;
};
