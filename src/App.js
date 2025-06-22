import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";

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
