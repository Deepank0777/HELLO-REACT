import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [restaurantData, setRestaurantData] = useState(null);

  const { resId } = useParams(); // Extracting resId from the URL parameters
  console.log("Restaurant ID:", resId);

  useEffect(() => {
    console.log("Fetching restaurant menu data...");
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    try {
      //   const response = await fetch("https://api.example.com/restaurant/menu/${resId}");

      //   const data = await response.json();
      //   console.log("Menu data fetched successfully:", data);

      const data = []; // Simulating an empty menu for demonstration purposes
      setRestaurantData(data);
    } catch (error) {
      console.error("Failed to fetch menu data:", error);
    }
  };

  if (restaurantData === null) return <Shimmer />;

  return (
    <div className="restaurant-menu">
      <h1>Restaurant Menu</h1>
      <p>Welcome to our restaurant! Here is our menu:</p>
      <ul>
        <li>Pizza</li>
        <li>Burger</li>
        <li>Pasta</li>
        <li>Salad</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
