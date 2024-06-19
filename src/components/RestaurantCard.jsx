function RestaurantCard({ name, imgUrl, rating, area, cuisine }) {
  return (
    <div className="restaurantCard">
      <img src={imgUrl} alt="" />
      <div className="restaurantCardBody">
        <h3>{name}</h3>
        <p>{rating}</p>
        <p>{cuisine}</p>
        <p>{area}</p>
      </div>
    </div>
  );
}

export default RestaurantCard;
