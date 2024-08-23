import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Order = () => {
  return (
    <View className="p-2 border-2 border-white-500 rounded-xl mb-2">
      <View className="flex-row justify-between mb-2">
        <Text className="text-white">#4888181</Text>
        <Text className="text-white">Delaiy</Text>
      </View>
      <View className="flex-row justify-between mb-2">
        <View className="mb-2">
          <Text className="text-white">From</Text>
          <Text className="text-white">Alicante</Text>
        </View>
        <View>
          <Text className="text-white">Date</Text>
          <Text className="text-white">23-08-2024, 12:30</Text>
        </View>
      </View>
    </View>
  );
};

export default Order;
