import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Order = () => {
  return (
    <LinearGradient
      colors={["rgba(255,255,255,0)", "rgba(255,255,255,0.1)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradientBorder}
    >
      <View className="p-2 rounded-lg  bg-[#222325]">
        <View className="flex-row px-2 pt-2 justify-between mb-2 items-center">
          <Text className="text-white font-semibold text-xl">#488818</Text>
          <Text className="text-white text-[12px] text-green-400">
            Delivered
          </Text>
        </View>
        <View className="flex-row justify-between mb-2 px-2 ">
          <View className="mb-2">
            <Text className="text-white text-[12px] font-light">From</Text>
            <Text className="text-white">Alicante</Text>
          </View>
          <View>
            <Text className="text-white text-[12px] font-light">Date</Text>
            <Text className="text-white text-sm">23-08-2024, 12:30</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Order;

const styles = StyleSheet.create({
  gradientBorder: {
    borderRadius: 8,
    padding: 0.5,
    marginVertical: 5,
  },
});
