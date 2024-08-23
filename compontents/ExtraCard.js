import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../theme";

import Entypo from "@expo/vector-icons/Entypo";

const ExtraCard = () => {
  return (
    <View>
      <LinearGradient
        colors={["rgba(255,255,255,0)", "rgba(255,255,255,0.1)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientBorder}
      >
        <View className="bg-[#222325] w-[150px]  flex rounded-lg">
          <TouchableOpacity className="flex items-center"></TouchableOpacity>
          <TouchableOpacity>
            <Text className=" text-white font-semibold text-lg px-5 pt-4">
              Espreso sa sojinim
            </Text>
          </TouchableOpacity>
          <View className="flex flex-row justify-between pt-2 pl-5">
            <Text className="text-white text-lg font-semibold">$2.20</Text>
            <TouchableOpacity>
              <Entypo
                name="plus"
                size={theme.sizeIcons.large}
                color={theme.whiteBase}
                style={styles.plusIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  gradientBorder: {
    borderRadius: 8,
    padding: 0.5,
    alignSelf: "center", // Center the gradient border
  },

  favoriteIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 10,
  },

  plusIcon: {
    backgroundColor: theme.orangeBase,
    padding: 2,
    borderTopLeftRadius: 8, // Esquina superior izquierda redondeada
    borderBottomRightRadius: 8, // Esquina inferior derecha redondeada
  },
});
export default ExtraCard;
