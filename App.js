import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import restaurantData from "./restaurantData.json";
/**
 * @plan
 *
 * Header
 * - Logo
 * - Navigation Items
 *
 * Body
 * - Seach
 * - RestaurantContainer
 *  - RestaurantCard
 *     - Img
 *     - Name of res, Star Rating, Cuisine, Delivery Time
 *
 * Footer
 * - Links
 * - Copywrite
 * - Address
 * - Contact
 *
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://marketplace.canva.com/EAFaFUz4aKo/3/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-tn1zF-_cG9c.jpg"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul className="nav-items-ul">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//inline styles for the card
const styleCard = {
  backgroundColor: "#f0f0f0",
  borderRadius: "8px",
  padding: "16px",
  margin: "16px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

const RestaurantCard = (props) => {
  //   console.log("props", props);
  const {
    name = "Default Restaurant",
    cloudinaryImageId = "default_image_id",
    costForTwo = "₹200 for two",
    cuisines = ["Indian", "Chinese"],
    avgRatingString = "0.0",
  } = props.resData.info;

  const { slaString = "20-25 mins" } = props.resData.info.sla;

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="restaurant logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{slaString}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search"> Search Bar</div>
      <div className="res-container">
        {restaurantData.map((res, idx) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
