import { View, Text } from "react-native";
import React, { useState } from "react";

import Layout from "../compontents/Layout";
import { StatusBar } from "expo-status-bar";
import ShoppingIconWithBadge from "../compontents/ShoppingIcon";
import CardsGrid from "../compontents/CardsGrid";
import TagCategory from "../compontents/TagCategory";
import { coffeeMenu } from "../api/fakeData";

const categories = ["All", ...new Set(coffeeMenu.map((item) => item.category))];

const Favorite = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredData, setFilteredData] = useState(coffeeMenu || []); // Asegúrate de que coffeeMenu tenga un valor inicial

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredData(coffeeMenu); // Muestra todos los elementos
    } else {
      setFilteredData(coffeeMenu.filter((item) => item.category === category)); // Filtra por categoría
    }
  };
  return (
    <>
      <Layout
        children={
          <View className="px-5 mt-8">
            <View className="flex-row justify-between align-middle py-2">
              <Text className="text-white text-lg font-medium">
                Favorite Coffee
              </Text>
              <ShoppingIconWithBadge />
            </View>
            <View className="pt-2">
              <TagCategory
                data={categories}
                onCategoryChange={handleCategoryChange}
              />
            </View>
            <CardsGrid paddingBottom={150} />
          </View>
        }
      />
    </>
  );
};

export default Favorite;
