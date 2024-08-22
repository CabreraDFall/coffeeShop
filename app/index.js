import { Text, View } from "react-native";
import Layout from "../compontents/Layout";

import ShoppingIcon from "../compontents/ShoppingIcon";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { theme } from "../theme";
export default function index() {
  const userName = "Fedrerick";

  return (
    <>
      <Layout
        children={
          <View className="flex-1 flex-row justify-between bet mt-8 px-5 align-middle">
            <Text className="text-white text-lg font-light">
              Hola, <Text className="font-medium">{userName}</Text>
            </Text>
            <ShoppingIcon />
          </View>
        }
      />
    </>
  );
}
