import { Text, View } from "react-native";
import Layout from "../compontents/Layout";
import { StatusBar } from "expo-status-bar";

export default function index() {
  return (
    <>
      <Layout
        children={
          <View className="flex-1">
            <Text className="text-white text-2xl">xx</Text>
          </View>
        }
      />
    </>
  );
}
