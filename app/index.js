import { Text, View } from "react-native";
import Layout from "../compontents/Layout";

import ShoppingIconWithBadge from "../compontents/ShoppingIcon";
import SearchBar from "../compontents/SearchBar";
import TagCategory from "../compontents/TagCategory";
import CardsGrid from "../compontents/CardsGrid";
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
              <ShoppingIconWithBadge />
            </View>
            <View className="py-5">
              <SearchBar />
            </View>
            <View>
              <TagCategory />
            </View>
            <View>
              <CardsGrid paddingBottom={350} />
            </View>
          </View>
        }
      />
    </>
  );
}
