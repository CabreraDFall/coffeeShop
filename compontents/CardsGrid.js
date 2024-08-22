import { View, Text } from "react-native";
import React from "react";
import Card from "./Card";

const CardsGrid = () => {
  const getGrid = [1, 2];

  return (
    <View className="flex flex-row flex-wrap  ">
      {getGrid.map((card, index) => (
        <Text key={index} className="w-1/2 p-2">
          <Card />
        </Text>
      ))}
    </View>
  );
};

export default CardsGrid;
