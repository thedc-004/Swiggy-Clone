import { DEFAULT_IMG_URL } from "../utils/constants";

function DishesSlider({ sliderData }) {
  return (
    <div className="dishesSliderContainer">
      <div className="dishesSliderHeader">
        <h2>What's on your mind?</h2>
      </div>
      <div className="dishesSlider flex">
        {sliderData.map((sliderItem) => {
          let imgUrl = DEFAULT_IMG_URL + sliderItem.imageId;
          let id = sliderItem.id;
          let altText = sliderItem.accessibility.altText;
          return (
            <div className="dishesSliderItem" key={id}>
              <img src={imgUrl} alt={altText} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DishesSlider;
