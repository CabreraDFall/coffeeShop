import { View, Text } from "react-native";

import Layout from "../compontents/Layout";
import ShoppingIconWithBadge from "../compontents/ShoppingIcon";
import OrderGrid from "../compontents/OrderGrid";
import TagCategory from "../compontents/TagCategory";

const TagOrderItem = [
  { id: "1", name: "Todas" },
  { id: "2", name: "Pendiente" },
  { id: "3", name: "Cancelado" },
  { id: "4", name: "Entregado" },
  { id: "5", name: "En Progreso" },
];

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
            <View className="pt-2">
              <TagCategory data={TagOrderItem} />
            </View>

            <OrderGrid paddingBottom={150} />
          </View>
        }
      />
    </>
  );
};

export default Order;
