import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HeaderRight() {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      className="mr-5"
      onPress={() => navigate("ShoppingCart" as never, { screen: "ShoppingCart" } as never)}
    >
      <MaterialCommunityIcons name="cart-outline" size={24} color="black" />
    </TouchableOpacity>
  );
}
