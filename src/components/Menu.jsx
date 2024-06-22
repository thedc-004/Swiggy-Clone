import MenuBody from "./MenuBody";
import MenuHeader from "./MenuHeader";

function Menu({ restaurantData }) {
  const restaurantInfo = restaurantData[2]?.card.card.info;
  // const menuData = restaurantData[4].groupedCard.cardGroupMap.REGULAR.cards;
  return (
    <div className="menuContainer">
      {/* <MenuHeader restaurantInfo={restaurantInfo} /> */}
      <MenuHeader />
      <MenuBody />
    </div>
  );
}

export default Menu;
