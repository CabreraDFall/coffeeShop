import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { theme } from "../theme";
import { LinearGradient } from "expo-linear-gradient";

const Card = () => {
  return (
    <LinearGradient
      colors={["rgba(255,255,255,0)", "rgba(255,255,255,0.1)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradientBorder}
    >
      <View className="bg-[#222325] w-[150px]  flex rounded-lg">
        <View className="flex w-full flex-row justify-end py-1">
          <AntDesign
            name="heart"
            size={theme.sizeIcons.medium}
            color={theme.whiteBase}
          />
        </View>
        <Image source={require("../assets/image-coffee1.png")} />
        <Text className="w-3/4 text-white font-medium">Espreso sa sojinim</Text>
        <View className="flex flex-row justify-between">
          <Text className="text-white">Price</Text>
          <AntDesign
            name="heart"
            size={theme.sizeIcons.medium}
            color={theme.whiteBase}
          />
        </View>
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  gradientBorder: {
    borderRadius: 8,
    padding: 0.5,
    alignSelf: "center", // Center the gradient border
  },
});

export default Card;
