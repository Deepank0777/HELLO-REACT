/**
 *
 * <div id="parent">
 *     <div id="child">
 *         <h1 id="heading-1">Hello, React!</h1>
 *         <h2 id="heading-2">Hello, React!</h1>
 *    </div>
 * </div>
 *
 */

const root = ReactDOM.createRoot(document.getElementById("root"));

const heading1 = React.createElement(
  "h1",
  { id: "heading-1" },
  "Hello, React!"
);
const heading2 = React.createElement(
  "h2",
  { id: "heading-2" },
  "Hello, React!"
);

const child = React.createElement("div", { id: "child" }, [heading1, heading2]);
const parent = React.createElement("div", { id: "parent" }, child);

root.render(parent);
