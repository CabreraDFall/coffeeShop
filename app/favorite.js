import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";

import { StatusBar } from "expo-status-bar";
// Corrige la ruta de importación si es necesario
import TagCategory from "../compontents/TagCategory"; // Corrige la ruta de importación si es necesario
import { fetchCoffeeMenu } from "../services/coffeeMenu";
import Layout from "../compontents/Layout";
import ShoppingIconWithBadge from "../compontents/ShoppingIcon";
import CardsGrid from "../compontents/CardsGrid";

const Favorite = () => {
  const [coffeeMenu, setCoffeeMenu] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const getCoffeeMenu = async () => {
      try {
        const menu = await fetchCoffeeMenu();
        setCoffeeMenu(menu);
        const favoriteMenu = menu.filter((item) => item.isFavorite);
        setCategories([
          "All",
          ...new Set(favoriteMenu.map((item) => item.category)),
        ]);
        setFilteredData(favoriteMenu);
      } catch (error) {
        console.error("No se pudo obtener el menú de café:", error);
      }
    };

    getCoffeeMenu();
  }, []);

  useEffect(() => {
    const filtered =
      selectedCategory === "All"
        ? coffeeMenu.filter((item) => item.isFavorite)
        : coffeeMenu.filter(
            (item) => item.isFavorite && item.category === selectedCategory
          );
    setFilteredData(filtered);
  }, [selectedCategory, coffeeMenu]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Layout>
      <View style={{ paddingHorizontal: 20, marginTop: 32 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 8,
          }}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "500" }}>
            Favorite Coffee
          </Text>
          <ShoppingIconWithBadge />
        </View>
        <View style={{ paddingTop: 8 }}>
          <TagCategory
            data={categories}
            onCategoryChange={handleCategoryChange}
          />
        </View>
        <CardsGrid data={filteredData} paddingBottom={375} />
      </View>
    </Layout>
  );
};

export default Favorite;
