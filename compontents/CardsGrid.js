import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import Card from "./Card";

const CardsGrid = ({ data, paddingBottom }) => {
  const [menu, setMenu] = useState(data);

  // Sincroniza el estado local con el prop 'data' cuando cambia
  useEffect(() => {
    setMenu(data);
  }, [data]);

  const handleFavoriteToggle = (id) => {
    setMenu((prevMenu) =>
      prevMenu.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  };

  return (
    <FlatList
      data={menu}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()} // Usar 'id' como clave única
      renderItem={({ item }) => (
        <View style={{ width: "50%", padding: 4 }}>
          <Card item={item} onFavoriteToggle={handleFavoriteToggle} />
        </View>
      )}
      contentContainerStyle={{ paddingBottom: paddingBottom }}
      showsVerticalScrollIndicator={false} // Oculta la barra de scroll vertical
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default CardsGrid;
