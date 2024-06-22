function MenuHeader({ restaurantInfo }) {
  const name = "Chinese helloo" || restaurantInfo.name;
  const rating = "4.3" || restaurantInfo.avgRating;
  const costForTwo = 150 || restaurantInfo.costForTwo / 100;
  const cuisines = "Chines, south indian" || restaurantInfo.cuisines.join(", ");
  return (
    <div className="menuHeader">
      <h2>{name}</h2>
      <div className="restaurantIntroCard flex">
        <div className="rating">
          <b>Rating : </b>
          {rating}
        </div>
        <div className="costForTwo">
          <b>Cost for two : </b> {costForTwo} Rs.
        </div>
        <div className="cuisines">
          <b>Cuisines : </b>
          {cuisines}
        </div>
      </div>
    </div>
  );
}

export default MenuHeader;
