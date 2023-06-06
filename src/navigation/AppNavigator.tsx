import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ShoppingCart from "../screens/ShoppingCart";
import type { AppStackParamList } from "../interfaces";
import DrawerNavigator from "./DrawerNavigator";

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={DrawerNavigator} options={{ headerShown: false }} />
      <Stack.Screen
        name="ShoppingCart"
        component={ShoppingCart}
        options={{ headerTitle: "Cart" }}
      />
    </Stack.Navigator>
  );
}
