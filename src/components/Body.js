import restaurantData from "../utils/restaurantData.json";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, use } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //Local State Variable
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    // Simulating an API call
    const fetchRestaurants = () => {
      // Here you would typically fetch data from an API
      // For this example, we are using static data

      //sleep for 10 seconds to simulate network delay
      setTimeout(() => {
        setRestaurantList(restaurantData);
      }, 10000);

      // After the delay, set the restaurant data
      setRestaurantList(restaurantData);
    };

    fetchRestaurants();
  }, []);

  const filterTopRestaurants = (restaurants) => {
    const topRestaurantList = restaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4.5
    );
    setRestaurantList(topRestaurantList);
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={filterTopRestaurants.bind(null, restaurantList)}
        >
          filter top restaurant
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((res, idx) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
