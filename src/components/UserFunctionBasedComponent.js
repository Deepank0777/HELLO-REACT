const User = (props) => {
  return (
    <div className="user-card">
      <h6>Rendering From Function Based Compo </h6>
      <h2>Name: {props.name}</h2>
      <h3>Location: Delhi</h3>
      <h4>Contact: @deepank</h4>
    </div>
  );
};

export default User;
