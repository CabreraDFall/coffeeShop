import { Tabs } from "expo-router";
import TabBar from "../compontents/TabBar";

export default function _layout() {
  return (
    <>
      <Tabs
        tabBar={(props) => <TabBar {...props} />}
        screenOptions={{
          headerShown: false,
        }}
        className="bg-black"
      >
        <Tabs.Screen name="index" options={{ title: "Home1" }} />
        <Tabs.Screen name="favorite" options={{ title: "Favorite" }} />
        <Tabs.Screen name="order" options={{ title: "Order" }} />
        <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      </Tabs>
    </>
  );
}
