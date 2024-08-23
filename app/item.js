import {
  View,
  Text,
  Image,
  FlatList,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Layout from "../compontents/Layout";
import ShoppingIconWithBadge from "../compontents/ShoppingIcon";
import AntDesign from "@expo/vector-icons/AntDesign";
import { theme } from "../theme";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import ExtraCard from "../compontents/ExtraCard";

const item = () => {
  const [count, setCount] = useState(1);
  const getExtras = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <Layout
        children={
          <View className="px-5 mt-8">
            <View className="flex-row justify-between align-middle py-2">
              <AntDesign
                name="left"
                size={theme.sizeIcons.large}
                color={theme.whiteBase}
              />
              <ShoppingIconWithBadge />
            </View>
            <View className="flex items-center">
              <Image source={require("../assets/coffe-preview.png")} />
            </View>
            <View className="pt-4">
              <Text className="text-white text-light text-[12px]">
                ESPECIAL DEL MES
              </Text>
            </View>
            <View className="flex ">
              <View className="flex flex-row justify-between pt-4">
                <Text className="text-white text-lg w-3/4">
                  Espreso del caribe
                </Text>
                <Text className="text-white font-semibold text-lg">$2.50</Text>
              </View>
              <View className="pt-4">
                <Text className="text-white">
                  Intenso, con toques de chocolate y frutas tropicales.
                </Text>
              </View>
            </View>
            <View className="pb-8">
              <Text className="text-white text-lg font-semibold py-6">
                Extras
              </Text>
              <FlatList
                data={getExtras}
                horizontal
                showsVerticalScrollIndicator={false} // Oculta la barra de scroll vertical
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <View>
                    <ExtraCard />
                  </View>
                )}
              />
            </View>
            <View className="flex flex-row justify-between py-4">
              <View className="flex flex-row items-center p-3 space-x-8  justify-between bg-[#323639] rounded-lg">
                <TouchableOpacity
                  onPress={() => (count > 1 ? setCount(count - 1) : 1)}
                >
                  <FontAwesome5
                    name="minus"
                    size={theme.sizeIcons.medium}
                    color="#a1a1a1"
                  />
                </TouchableOpacity>
                <Text className="text-[#a1a1a1] text-sm">{count}</Text>
                <TouchableOpacity onPress={() => setCount(count + 1)}>
                  <FontAwesome5
                    name="plus"
                    size={theme.sizeIcons.medium}
                    color="#a1a1a1"
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity className="bg-[#E37735] flex  justify-center  py-3 px-16  space-x-16 rounded-lg ">
                <Text className="text-white font-semibold">Add to cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
      />
    </>
  );
};

export default item;
