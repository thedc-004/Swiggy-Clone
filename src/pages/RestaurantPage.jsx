import { useEffect, useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { RESTAURANT_MENU_API } from "../utils/constants";
import "../styles/RestaurantPage.css";
import Loading from "../components/Loading";

function RestaurantPage() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(RESTAURANT_MENU_API);
  }, []);

  async function fetchData() {
    setLoading(true);
    const res = await fetch(RESTAURANT_MENU_API);
    const json = await res.json();
    setRestaurantData(json?.data?.cards);
    setLoading(false);
  }

  if (loading) {
    return <Loading />;
  }
  // console.log(restaurantData[4].groupedCard.cardGroupMap.REGULAR.cards[1]);

  return (
    <div className="restaurantPage">
      <Header />

      <Menu restaurantData={restaurantData} />
    </div>
  );
}

export default RestaurantPage;
