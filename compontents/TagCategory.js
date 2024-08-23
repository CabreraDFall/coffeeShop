import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { theme } from "../theme";

const TagCategory = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handlePress = (item) => {
    setSelectedItem(item.id);
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false} // Oculta la barra de scroll vertical
      showsHorizontalScrollIndicator={false}
      horizontal
      data={data}
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
