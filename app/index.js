import { Text, View } from "react-native";
import Layout from "../compontents/Layout";

import ShoppingIconWithBadge from "../compontents/ShoppingIcon";
import SearchBar from "../compontents/SearchBar";
import TagCategory from "../compontents/TagCategory";
import CardsGrid from "../compontents/CardsGrid";
import { coffeeMenu, person } from "../api/fakeData";
import { useEffect, useState } from "react";

import { fetchCoffeeMenu } from "../services/coffeeMenu";

const categories = ["All", ...new Set(coffeeMenu.map((item) => item.category))];

export default function index() {
  useEffect(() => {
    const getCoffeeMenu = async () => {
      try {
        const menu = await fetchCoffeeMenu();
        console.log("Menú de café:", menu);
      } catch (error) {
        console.error("No se pudo obtener el menú de café:", error);
      }
    };

    getCoffeeMenu();
  }, []);

  console.log(fetchCoffeeMenu);

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
            <View className="flex-row justify-between align-middle">
              <Text className="text-white text-lg font-light">
                Hola, <Text className="font-medium">{person.firstName}</Text>
              </Text>
              <ShoppingIconWithBadge />
            </View>
            <View className="py-5">
              <SearchBar />
            </View>

            <View>
              <TagCategory
                data={categories}
                onCategoryChange={handleCategoryChange}
              />
            </View>
            <View>
              <CardsGrid data={filteredData} paddingBottom={375} />
            </View>
          </View>
        }
      />
    </>
  );
}
