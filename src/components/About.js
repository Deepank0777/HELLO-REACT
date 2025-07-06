import UserFunctionBasedComponent from "./UserFunctionBasedComponent";
import UserClassBasedComponent from "./UserClassBasedComponent";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor called");
  }

  componentDidMount() {
    console.log("Parent Component did mount called");
  }

  render() {
    console.log("Parent Render called");
    return (
      <div className="about">
        <h1>About Us</h1>
        <p>
          Welcome to our restaurant! We are dedicated to providing you with the
          best dining experience. Our team is passionate about food and service,
          and we strive to make every visit memorable.
        </p>
        <p>
          Our menu features a variety of dishes made from the freshest
          ingredients, and we take pride in our commitment to quality and
          flavor.
        </p>

        {/* <UserFunctionBasedComponent name={"User Func"} /> */}
        <UserClassBasedComponent name={"1 User Class"} />
        <UserClassBasedComponent name={"2 User Class"} />
      </div>
    );
  }
}

export default About;
