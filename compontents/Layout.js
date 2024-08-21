import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { theme } from "../theme";

const Layout = ({ children }) => {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bgBlackBase,
  },
});

export default Layout;
