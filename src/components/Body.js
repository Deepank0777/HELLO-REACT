import restaurantData from "../utils/restaurantData.json";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, use } from "react";
import Shimmer from "./Shimmer";

import { Link } from "react-router";

const Body = () => {
  //Local State Variable
  //Whenever state variables update, the component re-renders => react triggers a reconciliation cycle
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

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
      setFilteredRestaurantList(restaurantData);
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
        <div className="search">
          <input
            type="text"
            placeholder="Search for restaurants"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredRestaurants = restaurantList.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurantList(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={filterTopRestaurants.bind(null, restaurantList)}
        >
          filter top restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurantList.map((res, idx) => (
          <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
            <RestaurantCard key={res.info.id} resData={res} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
