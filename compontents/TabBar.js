import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { stylesTheme, theme } from "../theme";
import { LinearGradient } from "expo-linear-gradient";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const TabBar = ({ state, descriptors, navigation }) => {
  const icons = {
    index: (props) => (
      <Entypo
        name="home"
        size={theme.sizeIcons.extraLarge}
        color={theme.whiteBase}
        {...props}
      />
    ),
    favorite: (props) => (
      <Entypo
        name="heart"
        size={theme.sizeIcons.extraLarge}
        color={theme.whiteBase}
        {...props}
      />
    ),
    order: (props) => (
      <AntDesign
        name="book"
        size={theme.sizeIcons.extraLarge}
        color={theme.whiteBase}
        {...props}
      />
    ),
    profile: (props) => (
      <FontAwesome6
        name="user-large"
        size={theme.sizeIcons.extraLarge}
        color={theme.whiteBase}
        {...props}
      />
    ),
  };

  return (
    <LinearGradient
      colors={["#222325", "#37383a"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.tabbar}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        if (["_sitemap", "+not-found"].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            style={styles.tabbarItem}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {icons[route.name]({
              color: isFocused ? theme.orangeBase : theme.whiteBase,
            })}
          </TouchableOpacity>
        );
      })}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingVertical: 25,
  },

  tabbarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TabBar;
