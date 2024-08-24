// apiService.js
import axios from "axios";

const baseUrl = "http://10.0.2.2:5001/coffeeMenu";

export const fetchCoffeeMenu = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el menú de café:", error);
    throw error;
  }
};
