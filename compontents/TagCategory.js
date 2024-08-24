import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { theme } from "../theme";

const TagCategory = ({ data, onCategoryChange }) => {
  const [selectedItem, setSelectedItem] = useState("All");
  // const [filteredData, setFilteredData] = useState(allData);

  const handlePress = (item) => {
    onCategoryChange(item);
    setSelectedItem(item);

    // Filtrar los datos según la categoría seleccionada
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false} // Oculta la barra de scroll vertical
      showsHorizontalScrollIndicator={false}
      horizontal
      data={data}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => handlePress(item)}
          style={styles.itemContainer}
        >
          <Text
            style={[styles.text, item === selectedItem && styles.selectedText]}
          >
            {item}
          </Text>
          {item === selectedItem && <View style={styles.underline} />}
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginBottom: 8,
  },
  text: {
    color: theme.whiteBase,
    paddingHorizontal: 5,
    paddingBottom: 7,
  },
  selectedText: {
    color: theme.orangeBase,
  },
  underline: {
    height: 3,
    backgroundColor: theme.orangeBase,
    width: "70%",
    position: "absolute",
    bottom: 0,
  },
});

export default TagCategory;
