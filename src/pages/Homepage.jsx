import DishesSlider from "../components/DishesSlider.jsx";
import Header from "../components/Header.jsx";
import "../styles/Homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <DishesSlider />
    </div>
  );
}

export default Homepage;
