import { View, Text } from "react-native";
import React from "react";

import Layout from "../compontents/Layout";
import { StatusBar } from "expo-status-bar";
import ShoppingIconWithBadge from "../compontents/ShoppingIcon";
import CardsGrid from "../compontents/CardsGrid";
import TagCategory from "../compontents/TagCategory";

const TagFavoriteItem = [
  { id: "1", name: "Todas" },
  { id: "2", name: "Café Expresso" },
  { id: "3", name: "Café Fuktrado" },
  { id: "4", name: "Café frío" },
  { id: "5", name: "Café helado" },
  { id: "6", name: "Café de filtro" },
  { id: "7", name: "Café americano" },
];

const Favorite = () => {
  return (
    <>
      <Layout
        children={
          <View className="px-5 mt-8">
            <View className="flex-row justify-between align-middle py-2">
              <Text className="text-white text-lg font-medium">
                Favorite Coffee
              </Text>
              <ShoppingIconWithBadge />
            </View>
            <View className="pt-2">
              <TagCategory data={TagFavoriteItem} />
            </View>
            <CardsGrid paddingBottom={150} />
          </View>
        }
      />
    </>
  );
};

export default Favorite;
