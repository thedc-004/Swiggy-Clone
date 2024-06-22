import { useEffect, useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { RESTAURANT_MENU_API } from "../utils/constants";
import "../styles/RestaurantPage.css";
import Loading from "../components/Loading";

function RestaurantPage() {
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    // fetchData(RESTAURANT_MENU_API);
  }, []);

  async function fetchData() {
    const res = await fetch(RESTAURANT_MENU_API);
    const json = await res.json();
    setRestaurantData(json?.data?.cards);
  }

  return (
    <div className="restaurantPage">
      <Header />

      <Menu restaurantData={restaurantData} />
    </div>
  );
}

export default RestaurantPage;
