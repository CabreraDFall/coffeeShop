import { Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { theme } from "../theme";

const SearchBar = () => {
  return (
    <View className="bg-[#323639]  py-2 px-4 rounded-lg flex flex-row align-middle items-center ">
      <AntDesign
        name="search1"
        size={theme.sizeIcons.medium} // Puedes usar theme.sizeIcons.extraLarge si lo tienes definido
        color={theme.whiteBase}
      />
      <TextInput
        placeholder="Encuentra tu taza perfecta..."
        placeholderTextColor="#E4E4E4"
        className="font-light px-4 text-white"
        style={{ fontSize: 12 }}
      ></TextInput>
    </View>
  );
};

export default SearchBar;
