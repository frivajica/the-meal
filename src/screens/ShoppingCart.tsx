import { FlatList, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useAtom } from "jotai";
import { Ionicons } from "@expo/vector-icons";

import { selectedItemsAtom } from "../store";
import CartItem from "../components/CartItem";

// export default function ShoppingCart({ navigation }: ShoppingCartScreenProps) {
export default function ShoppingCart() {
  const [items, setItems] = useAtom(selectedItemsAtom);

  function handleRemove(id: string) {
    const index = items.findIndex(item => item.id === id);
    const newItemsArray = [...items];
    newItemsArray.splice(index, 1);
    setItems([...newItemsArray]);
  }

  if (!items.length)
    return (
      <View className="flex-1 items-center justify-center bg-white pt-2">
        <StatusBar style="auto" />
        <Text className="m-3 text-center text-4xl font-semibold">It seems your cart is empty!</Text>
        <Text className="m-3 mb-10 text-center text-3xl">
          Explore the catalog to discover more delicious meals.
        </Text>
        <Ionicons name="restaurant-outline" size={100} color="black" />
      </View>
    );

  return (
    <View className="flex-1 items-center justify-center bg-white pt-2">
      <StatusBar style="auto" />
      <FlatList
        className="w-full"
        data={items}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <View className="mx-4 my-1">
            <CartItem {...item} onRemove={handleRemove} />
          </View>
        )}
      />
    </View>
  );
}
