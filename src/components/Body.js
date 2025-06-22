import restaurantData from "../utils/restaurantData.json";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  //Local State Variable
  const [restaurantList, setRestaurantList] = useState(restaurantData);

  //Normal JS variable
  // let restaurantList = restaurantData;

  const filterTopRestaurants = (restaurants) => {
    const topRestaurantList = restaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4.5
    );
    setRestaurantList(topRestaurantList);
  };

  return (
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
