import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { DEFAULT_IMG_URL } from "../utils/constants";

function TopPicsCard({ data }) {
  console.log(data);
  return (
    <div className="topPicsCard">
      <div className="topPicsCardHeader flex">
        <h3>Top Pics</h3>
        <div className="topPicsCardHeaderRight flex">
          <span className="flex">
            <FaArrowLeft />
          </span>
          <span className="flex">
            <FaArrowRight />
          </span>
        </div>
      </div>
      <div className="topPicsCardBody flex">
        {data.map((dataItem) => {
          return (
            <div className="topPicsBodyItem">
              <img src={DEFAULT_IMG_URL + dataItem.dish.info.imageId} alt="" />
              <div className="flex">
                <span>
                  Rs.{" "}
                  {(dataItem.dish.info.defaultPrice ||
                    dataItem.dish.info.price) / 100}
                </span>
                <button>Add</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopPicsCard;
