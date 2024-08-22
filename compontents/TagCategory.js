import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { theme } from "../theme";

const TagCategory = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const TagCategoryItem = [
    { id: "1", name: "Todas" },
    { id: "2", name: "Café Expresso" },
    { id: "3", name: "Café Fuktrado" },
    { id: "4", name: "Café frío" },
    { id: "5", name: "Café helado" },
    { id: "6", name: "Café de filtro" },
    { id: "7", name: "Café americano" },
  ];

  const handlePress = (item) => {
    setSelectedItem(item.id);
  };

  return (
    <FlatList
      horizontal
      data={TagCategoryItem}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => handlePress(item)}
          style={styles.itemContainer}
        >
          <Text
            style={[
              styles.text,
              item.id === selectedItem && styles.selectedText,
            ]}
          >
            {item.name}
          </Text>
          {item.id === selectedItem && <View style={styles.underline} />}
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
