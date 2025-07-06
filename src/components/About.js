import UserFunctionBasedComponent from "./UserFunctionBasedComponent";
import UserClassBasedComponent from "./UserClassBasedComponent";

const About = () => {
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
        ingredients, and we take pride in our commitment to quality and flavor.
      </p>

      <UserFunctionBasedComponent name={"User Func"} />
      <UserClassBasedComponent name={"User Class"} />
    </div>
  );
};

export default About;
