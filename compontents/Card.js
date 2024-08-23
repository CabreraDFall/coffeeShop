import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { theme } from "../theme";
import { LinearGradient } from "expo-linear-gradient";
import Entypo from "@expo/vector-icons/Entypo";

const Card = () => {
  return (
    <LinearGradient
      colors={["rgba(255,255,255,0)", "rgba(255,255,255,0.1)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradientBorder}
    >
      <View className="bg-[#222325] w-[150px]  flex rounded-lg">
        <View style={styles.favoriteIcon}>
          <AntDesign
            name="heart"
            size={theme.sizeIcons.medium}
            color={theme.whiteBase}
          />
        </View>
        <TouchableOpacity className="flex items-center">
          <Image
            source={require("../assets/image-coffee1.png")}
            className="justify-center flex"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="w-3/4 text-white font-medium px-5 pt-4">
            Espreso sa sojinim
          </Text>
        </TouchableOpacity>
        <View className="flex flex-row justify-between pt-2 pl-5">
          <Text className="text-white text-sm">$2.20</Text>
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

export default Card;
