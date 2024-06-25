import { useState } from "react";
import { DEFAULT_IMG_URL } from "../utils/constants";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

function Accordian({ data }) {
  const [showData, setShowData] = useState(false);
  function handleShowData() {
    setShowData(!showData);
  }
  return (
    <div className="accordian">
      <div className="accordianHeader flex" onClick={handleShowData}>
        <h3>
          {data.title}({data.itemCards.length})
        </h3>
        <span>{showData ? <FaAngleUp /> : <FaAngleDown />}</span>
      </div>
      <div className="accordianBody">
        {showData
          ? data.itemCards.map((dataItem) => {
              const itemData = dataItem?.card?.info;

              return (
                <div className="accordianItem flex">
                  <div className="accordianItemLeft">
                    <h4>{itemData.name || itemData.title}</h4>
                    <p>
                      <b>
                        Rs.{" "}
                        {itemData.price / 100 || itemData.defaultPrice / 100}
                      </b>
                    </p>
                    <p>{itemData.description}</p>
                  </div>
                  <div className="accordianItemRight">
                    <img src={DEFAULT_IMG_URL + itemData.imageId} alt="" />
                  </div>
                </div>
              );
            })
          : false}
      </div>
    </div>
  );
}

export default Accordian;
