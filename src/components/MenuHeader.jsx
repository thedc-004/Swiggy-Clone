function MenuHeader({ restaurantInfo }) {
  return (
    <div className="menuHeader">
      <h2>{restaurantInfo.name}</h2>
      <div className="restaurantIntroCard flex">
        <div className="rating">
          <b>Rating : </b>
          {restaurantInfo.avgRating}
        </div>
        <div className="costForTwo">
          <b>Cost for two : </b> {restaurantInfo.costForTwo / 100} Rs.
        </div>
        <div className="cuisines">
          <b>Cuisines : </b>
          {restaurantInfo.cuisines.join(", ")}
        </div>
      </div>
    </div>
  );
}

export default MenuHeader;
