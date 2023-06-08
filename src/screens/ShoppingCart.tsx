import { FlatList, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useAtom } from "jotai";
import { memo, useMemo, useState } from "react";

import { selectedItemsAtom } from "../store";
import CartItem from "../components/Cart/CartItem";
import EmptyCart from "../components/Cart/EmptyCart";
import Checkout from "../components/Cart/Checkout";

import type { SelectedItem } from "../interfaces";

function ShoppingCart() {
  const [items, setItems] = useAtom(selectedItemsAtom);
  const [isLoading, setIsLoading] = useState(false);
  const subtotal = useMemo(
    () => items.reduce((acc, { price, quantity }) => acc + price * quantity, 0),
    [items]
  );

  function handleQuantityChange({ id, quantity }: Partial<SelectedItem>) {
    const index = items.findIndex(item => id === item.id);
    const newItemsArray = [...items];
    if (quantity) {
      newItemsArray[index].quantity = quantity;
    } else {
      newItemsArray.splice(index, 1);
    }
    setItems([...newItemsArray]);
    setIsLoading(false);
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
            <CartItem
              {...item}
              onDebounceStart={() => setIsLoading(true)}
              onChange={handleQuantityChange}
            />
          </View>
        )}
      />
      <Checkout subtotal={subtotal} loading={isLoading} />
    </View>
  );
}

export default memo(ShoppingCart);
