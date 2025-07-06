import { useEffect, useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Simulating an API call or any side effect

    return () => {
      console.log("Component will unmount called");
      // Cleanup code can go here, like removing event listeners
    };
  }, []);

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h6>Rendering From Function Based Compo </h6>
      <h2>Name: {props.name}</h2>
      <h3>Location: Delhi</h3>
      <h4>Contact: @deepank</h4>
    </div>
  );
};

export default User;
