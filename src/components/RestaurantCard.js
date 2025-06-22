import { CDN_URL } from "../utils/constants";

//inline styles for the card
const styleCard = {
  backgroundColor: "#f0f0f0",
  borderRadius: "8px",
  padding: "16px",
  margin: "16px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

const RestaurantCard = (props) => {
  //   console.log("props", props);
  const {
    name = "Default Restaurant",
    cloudinaryImageId = "default_image_id",
    costForTwo = "₹200 for two",
    cuisines = ["Indian", "Chinese"],
    avgRatingString = "0.0",
  } = props.resData.info;

  const { slaString = "20-25 mins" } = props.resData.info.sla;

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
