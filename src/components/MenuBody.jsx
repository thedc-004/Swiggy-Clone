import { IoIosSearch } from "react-icons/io";
import TopPicsCard from "./TopPicsCard";
import Accordian from "./Accordian";

function MenuBody({ data }) {
  console.log(data[1].card);
  return (
    <div className="menuBody">
      <h3 className="flex">
        <i>Menu</i>
      </h3>
      <div className="searchDish flex">
        <input
          type="text"
          name="searchDish"
          id="searchDish"
          placeholder="Search for Dishes"
        />
        <span className="flex">
          <IoIosSearch />
        </span>
      </div>
      <div className="dishFilters">
        <ul className="flex">
          <li>Pure Veg</li>
          <li>BestSeller</li>
        </ul>
      </div>
      <hr />
      {data[1]?.card?.card?.carousel ? (
        <TopPicsCard data={data[1].card.card.carousel} />
      ) : null}
      {data.map((dataItem) => {
        const dishData = dataItem.card.card;
        const typeString = dishData["@type"];
        const type = typeString.slice(typeString.lastIndexOf(".") + 1);

        if (type === "ItemCategory") {
          return <Accordian data={dishData} />;
        }

        if (type === "NestedItemCategory") {
          return (
            <div className="nestedCategory">
              <h2>{dishData.title}</h2>
              {dishData.categories.map((nestedDishData) => {
                return <Accordian data={nestedDishData} />;
              })}
            </div>
          );
        }
      })}
    </div>
  );
}

export default MenuBody;
