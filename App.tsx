import "react-native-gesture-handler";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { StripeProvider } from "@stripe/stripe-react-native";

import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <StripeProvider publishableKey={Constants.manifest?.extra?.STRIPE_PUBLIC_KEY}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </StripeProvider>
  );
}
