import { View, Text, FlatList, ScrollView } from "react-native";
import React from "react";
import Card from "./Card";

const CardsGrid = ({ paddingBottom }) => {
  const getGrid = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <FlatList
      data={getGrid}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View className="w-1/2 p-4">
          <Card />
        </View>
      )}
      contentContainerStyle={{ paddingBottom: paddingBottom }}
      showsVerticalScrollIndicator={false} // Oculta la barra de scroll vertical
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default CardsGrid;
