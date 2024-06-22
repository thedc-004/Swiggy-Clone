import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import DishesSlider from "../components/DishesSlider.jsx";
import Header from "../components/Header.jsx";
import ReastaurantList from "../components/ReastaurantList.jsx";
import "../styles/Homepage.css";
import Loading from "../components/Loading.jsx";
import Footer from "../components/Footer.jsx";

function Homepage() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.30080&lng=73.20430&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await res.json();
    setSliderData(json.data.cards[0].card.card.imageGridCards.info);
    setRestaurantData(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  }

  return (
    <div className="homepage">
      <Header />
      {sliderData.length === 0 ? (
        <Loading />
      ) : (
        <DishesSlider sliderData={sliderData} />
      )}
      {restaurantData.length === 0 ? (
        <Loading />
      ) : (
        <ReastaurantList data={restaurantData} />
      )}
      <Footer />
    </div>
  );
}

export default Homepage;
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.30080&lng=73.20430&restaurantId=605290&catalog_qa=undefined&submitAction=ENTER