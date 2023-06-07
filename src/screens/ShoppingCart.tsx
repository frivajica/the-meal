import { FlatList, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useAtom } from "jotai";

import { selectedItemsAtom } from "../store";
import CartItem from "../components/Cart/CartItem";
import EmptyCart from "../components/Cart/EmptyCart";
import CartSummary from "../components/Cart/CartSummary";
import { memo, useMemo } from "react";

// export default function ShoppingCart({ navigation }: ShoppingCartScreenProps) {
function ShoppingCart() {
  const [items, setItems] = useAtom(selectedItemsAtom);
  const subtotal = useMemo(() => items.reduce((acc, { price }) => acc + price, 0), [items]);

  function handleRemove(id: string) {
    const index = items.findIndex(item => item.id === id);
    const newItemsArray = [...items];
    newItemsArray.splice(index, 1);
    setItems([...newItemsArray]);
  }

  if (!items.length) return <EmptyCart />;

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <StatusBar style="auto" />
      <FlatList
        className="w-full"
        data={items}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => (
          <Text className="font-base mx-auto mb-4 mt-6 text-xl">Your Choice 😋</Text>
        )}
        renderItem={({ item }) => (
          <View className="mx-4 my-1">
            <CartItem {...item} onRemove={handleRemove} />
          </View>
        )}
      />
      <CartSummary subtotal={subtotal} />
    </View>
  );
}

export default memo(ShoppingCart);
