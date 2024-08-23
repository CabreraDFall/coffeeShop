import { View, Text } from "react-native";
import React from "react";

import Layout from "../compontents/Layout";
import { StatusBar } from "expo-status-bar";
import ShoppingIconWithBadge from "../compontents/ShoppingIcon";
import CardsGrid from "../compontents/CardsGrid";

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
            <CardsGrid paddingBottom={120} />
          </View>
        }
      />
    </>
  );
};

export default Favorite;
