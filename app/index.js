import { Text, View } from "react-native";
import Layout from "../compontents/Layout";

import ShoppingIconWithBadge from "../compontents/ShoppingIcon";
import SearchBar from "../compontents/SearchBar";
import TagCategory from "../compontents/TagCategory";
import CardsGrid from "../compontents/CardsGrid";

const TagCategoryItem = [
  { id: "1", name: "Todas" },
  { id: "2", name: "Café Expresso" },
  { id: "3", name: "Café Fuktrado" },
  { id: "4", name: "Café frío" },
  { id: "5", name: "Café helado" },
  { id: "6", name: "Café de filtro" },
  { id: "7", name: "Café americano" },
];

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
              <TagCategory data={TagCategoryItem} />
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
