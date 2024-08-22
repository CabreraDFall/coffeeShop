import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { theme } from "../theme";

const ShoppingIconWithBadge = () => {
  const badgeCount = 1;
  return (
    <View style={styles.iconContainer}>
      <TouchableOpacity>
        <MaterialIcons
          name="shopping-bag"
          size={theme.sizeIcons.extraLarge} // Puedes usar theme.sizeIcons.extraLarge si lo tienes definido
          color={theme.whiteBase} // Puedes usar theme.whiteBase si lo tienes definido
        />
      </TouchableOpacity>
      {badgeCount > 0 && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{badgeCount}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    position: "relative",
  },
  badgeContainer: {
    position: "absolute",
    right: -3,

    backgroundColor: theme.orangeBase,
    borderRadius: 10,
    width: 15,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default ShoppingIconWithBadge;
