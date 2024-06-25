import { useEffect, useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { RESTAURANT_MENU_API } from "../utils/constants";
import "../styles/RestaurantPage.css";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";

function RestaurantPage() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { restId } = useParams();
  // console.log();

  useEffect(() => {
    fetchData(RESTAURANT_MENU_API + restId);
  }, []);

  async function fetchData() {
    setLoading(true);
    const res = await fetch(RESTAURANT_MENU_API + restId);
    const resJSON = await res.json();
    setRestaurantData(resJSON?.data?.cards);
    setLoading(false);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="restaurantPage">
      <Header />
      <Menu restaurantData={restaurantData} />
    </div>
  );
}

export default RestaurantPage;
