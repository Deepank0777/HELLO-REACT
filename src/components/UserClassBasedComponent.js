import React from "react";

class UserClassBasedComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("user class based component props", props);
  }
  render() {
    return (
      <div className="user-card">
        <h6>Rendering From Class Based Component </h6>
        <h2>Name: {this.props.name}</h2>
        <h3>Location: Delhi</h3>
        <h4>Contact: @deepank</h4>
      </div>
    );
  }
}

export default UserClassBasedComponent;
