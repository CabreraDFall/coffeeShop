import { View, FlatList } from "react-native";
import Card from "./Card";
import useMenuUpdate from "../services/useMenuUpadte";

const CardsGrid = ({ data, paddingBottom }) => {
  const [menu, handleFavoriteToggle] = useMenuUpdate(data);
  return (
    <FlatList
      data={menu}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ width: "50%", padding: 4 }}>
          <Card item={item} onFavoriteToggle={handleFavoriteToggle} />
        </View>
      )}
      contentContainerStyle={{ paddingBottom: paddingBottom }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default CardsGrid;
