import React from "react";
import RestaurantCard from "../RestaurantCard/RestauratCard";
import Shimmer from "../Shimmer/Shimmer";
import "./index.css";
import { useEffect,  useState } from "react";

const Body = () => {
  // Local State Variable - Super Powerful Variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");


  useEffect(()=> {
    fetchData();
  }, [])

  const fetchData = async() => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.95129&lng=77.6244&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const filterRestaurantCards = () => {
    console.log("Search Text", searchText);
    const filteredRestaurants = listOfRestaurants.filter((restaurant) => {
      return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredRestaurants(filteredRestaurants);
    // setListOfRestaurants(filteredRestaurants);
  }




  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
      <div className="search">
        <input
          type="text"
          className="search-box"
          placeholder="Search for restaurants"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-btn" onClick={filterRestaurantCards}>Search</button>
      </div>
      <button
        className="filter-button"
        onClick={() => {
          console.log("Top Rated Restaurants", listOfRestaurants);
          setListOfRestaurants(
            listOfRestaurants.filter((res) => res.info.avgRating > 4),
          );
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#007bff")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
      >
        Top Rated Restaurants
      </button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resInfo={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
