import { View, Text } from "react-native";
import React from "react";

import Layout from "../compontents/Layout";
import { StatusBar } from "expo-status-bar";

const Favorite = () => {
  return (
    <>
      <Layout
        children={
          <View className="flex-1">
            <Text className="text-white text-2xl">Façorite</Text>
          </View>
        }
      />
    </>
  );
};

export default Favorite;
