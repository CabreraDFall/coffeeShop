import { Text, View } from "react-native";
import Layout from "../compontents/Layout";

import ShoppingIcon from "../compontents/ShoppingIcon";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { theme } from "../theme";
import SearchBar from "../compontents/SearchBar";
import TagCategory from "../compontents/TagCategory";
export default function index() {
  const userName = "Fedrerick";

  return (
    <>
      <Layout
        children={
          <View className="px-5 mt-8">
            <View className="flex-row justify-between align-middle">
              <Text className="text-white text-lg font-light">
                Hola, <Text className="font-medium">{userName}</Text>
              </Text>
              <ShoppingIcon />
            </View>
            <View className="py-5">
              <SearchBar />
            </View>
            <View>
              <TagCategory />
            </View>
          </View>
        }
      />
    </>
  );
}
