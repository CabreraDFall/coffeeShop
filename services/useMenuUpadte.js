import { useState, useEffect } from "react";

const useMenuUpdate = (data) => {
  const [menu, setMenu] = useState(data);

  useEffect(() => {
    setMenu(data);
  }, [data]);

  const handleFavoriteToggle = (id) => {
    const itemToToggle = menu.find((item) => item.id === id);

    if (!itemToToggle) return;

    const newMenu = menu.map((item) =>
      item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
    );

    setMenu(newMenu);

    fetch(`http://10.0.2.2:5001/coffeeMenu/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isFavorite: !itemToToggle.isFavorite,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMenu((prevMenu) =>
          prevMenu.map((item) =>
            item.id === id ? { ...item, isFavorite: data.isFavorite } : item
          )
        );
      })
      .catch(() => {
        setMenu((prevMenu) =>
          prevMenu.map((item) =>
            item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
          )
        );
      });
  };

  return [menu, handleFavoriteToggle];
};

export default useMenuUpdate;
