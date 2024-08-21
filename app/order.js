import { View, Text } from "react-native";

import Layout from "../compontents/Layout";

const Order = () => {
  return (
    <Layout
      children={
        <View className="flex-1">
          <Text className="text-white text-2xl">Order</Text>
        </View>
      }
    />
  );
};

export default Order;
