import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

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
      <Outlet /> {/*This is where the child components will be rendered */}
      {/* <footer className="footer">
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about-us">About Us</a>
          <a href="/contact-us">Contact Us</a>
        </div>
        <p>&copy; 2023 Your Company Name. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />, // This is the default route for the app
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
