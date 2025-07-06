import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

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

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // errorElement: <h1>Oops! Something went wrong.</h1>,
    errorElement: <Error />,
  },
  {
    path: "/about-us",
    element: <About />,
  },
  {
    path: "/contact-us",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
