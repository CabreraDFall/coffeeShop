import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="font-bold">
          Open up App.js to start working on your appxxx!
        </Text>
      </View>
    </SafeAreaView>
  );
}
