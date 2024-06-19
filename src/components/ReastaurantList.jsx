import { useState } from "react";
import RestaurantCard from "./RestaurantCard";

function ReastaurantList({ data }) {
  const [restaurantList, setRestaurantList] = useState(data);
  const [filterOn, setFilterOn] = useState(false);
  const [searchText, setSearchText] = useState("");

  // Filters the restaurants with rating higher than 4.5
  function handleTopRestaurant() {
    if (filterOn) {
      setFilterOn(false);
      setRestaurantList(data);
    } else {
      setFilterOn(true);
      let newRestaurantList = data.filter(
        (restaurant) => restaurant.info.avgRating > 4.5
      );
      setRestaurantList(newRestaurantList);
    }
  }

  // Handles the search function
  function handleSearch() {
    setRestaurantList(
      data.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }

  return (
    <div className="restaurantListDiv">
      <h2>Restaurants with online food delivery in Vadodara</h2>
      <div className="filterList flex">
        <div className="searchbar">
          <button onClick={handleSearch}>Search</button>
          <input
            type="text"
            name="searchbar"
            id="searchbar"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <button
          onClick={handleTopRestaurant}
          className={filterOn ? "selectedButton" : ""}
        >
          Top Restaurants
        </button>
      </div>
      <div className="restaurantList">
        {restaurantList.map((rest) => {
          let name = rest.info.name;
          let imgUrl =
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            rest.info.cloudinaryImageId;
          let rating = rest.info.avgRating;
          let cuisine = rest.info.cuisines.join(", ");
          let area = rest.info.areaName;
          let id = rest.info.id;
          return (
            <RestaurantCard
              name={name}
              imgUrl={imgUrl}
              rating={rating}
              cuisine={cuisine}
              area={area}
              key={id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ReastaurantList;
