import { View, Text, FlatList } from "react-native";
import React from "react";
import Order from "./Order";

const OrderGrid = ({ paddingBottom }) => {
  const getOrders = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <FlatList
      data={getOrders}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View>
          <Order />
        </View>
      )}
      className="my-3"
      contentContainerStyle={{ paddingBottom: paddingBottom }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <Order />
    </FlatList>
  );
};

export default OrderGrid;
