import imageUrl from "../assets/logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiWallet } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineCelebration } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlinePersonOutline } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";

function Header() {
  return (
    <div className="header flex">
      <div className="header__left flex">
        <div className="header__logo">
          <img src={imageUrl} alt="" />
        </div>
        <div className="header__item flex">
          <span>Other</span> <MdKeyboardArrowDown />
        </div>
      </div>
      <div className="header__right">
        <ul className="flex">
          <li>
            <div className="header__item flex">
              <CiWallet />
              <span>Swiggy Corporate</span>
            </div>
          </li>
          <li>
            <div className="header__item flex">
              <IoIosSearch />
              <span>Search</span>
            </div>
          </li>
          <li>
            <div className="header__item flex">
              <MdOutlineCelebration />
              <span>Offers</span>
            </div>
          </li>
          <li>
            <div className="header__item flex">
              <IoIosHelpCircleOutline />
              <span>Help</span>
            </div>
          </li>
          <li>
            <div className="header__item flex">
              <MdOutlinePersonOutline />
              <span>Sign in</span>
            </div>
          </li>
          <li>
            <div className="header__item flex">
              <CiShoppingCart />
              <span>Cart</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
