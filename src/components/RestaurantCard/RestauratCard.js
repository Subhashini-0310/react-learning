import { CDN_URL } from "../../utils/constants";

const RestaurantCard = ({ resInfo }) => {
  const { name, cuisines, avgRating, sla } = resInfo;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        src={CDN_URL}
        alt="restaurant-logo"
      />
      <h3>{name}</h3>
      <h4>Rating: {avgRating}</h4>
      <h4>Cuisine: {cuisines.join(", ")}</h4>
      <h4>Delivery Time: {sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;