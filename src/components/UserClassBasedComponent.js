import React from "react";

class UserClassBasedComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 0,
      count3: 0,
    };

    console.log(props.name, "Constructor called");
  }

  componentDidMount() {
    console.log(this.props.name, "Component did mount called");
    // Simulating an API call or any side effect
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.name, "Component did update called");
  }

  componentWillUnmount() {
    console.log(this.props.name, "Component will unmount called");
    // Cleanup code can go here, like removing event listeners
  }

  render() {
    const { count, count2 } = this.state;
    console.log(this.props.name, "Render called");
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
              count2: count2 + 1,
            });
          }}
        >
          Increment Count
        </button>
        <h6>Rendering From Class Based Component </h6>
        <h2>Name: {this.props.name}</h2>
        <h3>Location: Delhi</h3>
        <h4>Contact: @deepank</h4>
      </div>
    );
  }
}

export default UserClassBasedComponent;
