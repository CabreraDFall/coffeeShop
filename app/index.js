import { Text, View } from "react-native";
import Layout from "../compontents/Layout";
import ShoppingIconWithBadge from "../compontents/ShoppingIcon";
import SearchBar from "../compontents/SearchBar";
import TagCategory from "../compontents/TagCategory";
import CardsGrid from "../compontents/CardsGrid";
import { person } from "../api/fakeData";
import { useEffect, useState } from "react";
import { fetchCoffeeMenu } from "../services/coffeeMenu";

export default function Index() {
  const [coffeeMenu, setCoffeeMenu] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Fetch all coffee menu data when the component mounts
  useEffect(() => {
    const getCoffeeMenu = async () => {
      try {
        const menu = await fetchCoffeeMenu();
        setCoffeeMenu(menu);
        setCategories(["All", ...new Set(menu.map((item) => item.category))]);
        setFilteredData(menu);
      } catch (error) {
        console.error("No se pudo obtener el menú de café:", error);
      }
    };

    getCoffeeMenu();
  }, []);

  // Fetch filtered data based on the selected category
  useEffect(() => {
    const getFilteredData = async () => {
      try {
        const menu = await fetchCoffeeMenu();
        if (selectedCategory === "All") {
          setFilteredData(menu);
        } else {
          setFilteredData(
            menu.filter((item) => item.category === selectedCategory)
          );
        }
      } catch (error) {
        console.error("No se pudo obtener el menú de café:", error);
      }
    };

    getFilteredData();
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
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
