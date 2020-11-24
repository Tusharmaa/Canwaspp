import React from "react";
import "./Header.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Header() {
  const [{ cart }] = useStateValue();

  return (
    <div className="navbar">
      <Link className="navbar-logo" to="/">
        <div className="navbar-logo1">
          <img src={"/images/Logo1.png"} alt="Logo" />
          <img src={"/images/Logo.png"} alt="Logo" />
        </div>
      </Link>
      <Link to="/Checkout">
        <div className="navbar-textsCart">
          CART <ShoppingCartIcon />:<span>{cart?.length}</span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
