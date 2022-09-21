import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import "./Header.css";
import { useStateValue } from "./StateProvider";

const Header = () => {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      {/* logo on the left -> img */}
      <Link to="/">
        <img
          className="header__logo"
          src="https://c8.alamy.com/comp/2CBC2KP/amazon-logo-2CBC2KP.jpg"
          alt="amazon-icon"
        />
      </Link>

      {/* searchBar */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* three links */}
      <div className="header__nav">
        {/* 1st links */}
        <Link to={!user && "/login"} className="header__navLink">
          <div onClick={login} className="header__navOption">
            <span className="header__navOptionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__navOptionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        {/* 2nd links */}
        <Link to="/returnsOrders" className="header__navLink">
          <div className="header__navOption">
            <span className="header__navOptionLineOne">Returns </span>
            <span className="header__navOptionLineTwo">& Orders</span>
          </div>
        </Link>
        {/* 3rd links */}
        <Link to="/yourPrime" className="header__navLink">
          <div className="header__navOption">
            <span className="header__navOptionLineOne">Your</span>
            <span className="header__navOptionLineTwo">Prime</span>
          </div>
        </Link>
        {/* 4t links */}
        <Link to="checkout" className="header__navLink">
          <div className="header__navOptionBasket">
            <ShoppingBasketIcon className="header__navOptionBasketIcon" />
            <span className="header__navOptionLineTwo header__navBasketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>

      {/* buskate icon */}
    </div>
  );
};

export default Header;
