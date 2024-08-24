import { View, Text, FlatList, ScrollView } from "react-native";
import React from "react";
import Card from "./Card";

const CardsGrid = ({ data, paddingBottom }) => {
  return (
    <FlatList
      data={data}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View className="w-1/2 p-4">
          <Card item={item} />
        </View>
      )}
      contentContainerStyle={{ paddingBottom: paddingBottom }}
      showsVerticalScrollIndicator={false} // Oculta la barra de scroll vertical
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default CardsGrid;
