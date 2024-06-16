import { dishesData } from "../utils/dishesData.json";

function DishesSlider() {
  return (
    <div className="dishesSliderContainer">
      <div className="dishesSliderHeader">
        <h2>What's on your mind?</h2>
      </div>
      <div className="dishesSlider flex">
        {dishesData.map(({ imgUrl, name }) => {
          return (
            <div className="dishesSliderItem">
              <img src={imgUrl} alt={name + "dishes Restaurant"} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DishesSlider;
