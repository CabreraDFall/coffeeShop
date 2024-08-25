import { useState, useEffect } from "react";

const useMenuUpdate = (data) => {
  const [menu, setMenu] = useState(data);

  useEffect(() => {
    setMenu(data);
  }, [data]);

  //console.log(data);
  const handleFavoriteToggle = (id) => {
    setMenu((prevMenu) => {
      const updatedMenu = prevMenu.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      );

      fetch(`http://10.0.2.2:5001/coffeeMenu/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isFavorite: !prevMenu.find((item) => item.id === id).isFavorite,
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
          // Optionally handle the error, e.g., show a notification
        });

      return updatedMenu;
    });
  };

  return [menu, handleFavoriteToggle];
};

export default useMenuUpdate;
