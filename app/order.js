import { View, Text } from "react-native";

import Layout from "../compontents/Layout";
import ShoppingIconWithBadge from "../compontents/ShoppingIcon";
import OrderGrid from "../compontents/OrderGrid";

const Order = () => {
  return (
    <>
      <Layout
        children={
          <View className="px-5 mt-8">
            <View className="flex-row justify-between align-middle py-2">
              <Text className="text-white text-lg font-medium">
                Your orders
              </Text>
              <ShoppingIconWithBadge />
            </View>

            <OrderGrid paddingBottom={120} />
          </View>
        }
      />
    </>
  );
};

export default Order;
