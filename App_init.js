import React from "react";
import ReactDOM from "react-dom/client";

//JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)
const Title = () => (
  <h1 className="head1" tabIndex="5">
    Hello React using JSX!
  </h1>
);

const spanElement = <span>Span Element</span>;

const normalTitle = (
  <h1 className="head2" tabIndex="5">
    Hello React {spanElement}
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    {Title()}
    <Title></Title>
    <Title />
    {normalTitle}
    <h1 className="heading">Hello React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
