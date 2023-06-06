import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import ShoppingCart from "../screens/ShoppingCart";
import type { AppStackParamList } from "../interfaces";

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen
        name="ShoppingCart"
        component={ShoppingCart}
        options={{ headerTitle: "Cart" }}
      />
    </Stack.Navigator>
  );
}
