import React from "react";
import ReactDOM from "react-dom/client";

//JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML.
//It allows you to write HTML-like code within JavaScript, which is then transformed into React elements.
//JSX makes it easier to visualize the structure of the UI and is commonly used in React applications.
//JSX is not required to use React, but it is widely adopted because it makes the code more readable and maintainable.
//JSX is transpiled to JavaScript using tools like Babel, which converts JSX syntax into React.createElement calls.
//This allows React to create and manage the virtual DOM efficiently.

//JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)
const jsxHeading = (
  <h1 className="head" tabIndex="5">
    Hello, JSX!
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
