function DishesSlider({ sliderData }) {
  return (
    <div className="dishesSliderContainer">
      <div className="dishesSliderHeader">
        <h2>What's on your mind?</h2>
      </div>
      <div className="dishesSlider flex">
        {sliderData.map((sliderItem) => {
          let imgUrl =
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
            sliderItem.imageId;
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
