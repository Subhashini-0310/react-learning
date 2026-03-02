import React from "react";
import RestaurantCard from "../RestaurantCard/RestauratCard";
import "./index.css";
import { resList } from "../../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Local State Variable - Super Powerful Variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  // let listOfRestaurants = [{
  //   info: {
  //     id: "345678",
  //     name: "Green Bites",
  //     locality: "Residency Road",
  //     areaName: "South Zone",
  //     costForTwo: "₹250 for two",
  //     cuisines: ["Healthy Food", "Salads", "Vegan"],
  //     avgRating: 4.7,
  //     avgRatingString: "4.7",
  //     sla: {
  //       deliveryTime: 20,
  //       lastMileTravel: 1.5,
  //       slaString: "20 mins",
  //     },
  //   },
  // }, {
  //   info: {
  //     id: "3456789",
  //     name: "Dominoes",
  //     cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
  //     locality: "Residency Road",
  //     areaName: "South Zone",
  //     costForTwo: "₹250 for two",
  //     cuisines: ["Healthy Food", "Salads", "Vegan"],
  //     avgRating: 4.9,
  //     avgRatingString: "4.9",
  //     totalRatingsString: "8K+ ratings",
  //     veg: true,
  //     sla: {
  //       deliveryTime: 20,
  //       lastMileTravel: 1.5,
  //       slaString: "20 mins",
  //     },
  //     aggregatedDiscountInfoV3: {
  //       header: "30% OFF",
  //       subHeader: "UPTO ₹75",
  //     },
  //   },
  // }, {
  //   info: {
  //     id: "3456787",
  //     name: "KFC",
  //     cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
  //     locality: "Residency Road",
  //     areaName: "South Zone",
  //     costForTwo: "₹250 for two",
  //     cuisines: ["Healthy Food", "Salads", "Vegan"],
  //     avgRating: 3,
  //     avgRatingString: "3.0",
  //     totalRatingsString: "8K+ ratings",
  //     veg: true,
  //     sla: {
  //       deliveryTime: 20,
  //       lastMileTravel: 1.5,
  //       slaString: "20 mins",
  //     },
  //     aggregatedDiscountInfoV3: {
  //       header: "30% OFF",
  //       subHeader: "UPTO ₹75",
  //     },
  //   },
  // }]

  return (
    <div className="body">
      <button
        className="filter-button"
        onClick={() => {
          setListOfRestaurants(
            listOfRestaurants.filter((res) => res.info.avgRating > 4.5),
          );
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#007bff")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
      >
        Top Rated Restaurants
      </button>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resInfo={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
