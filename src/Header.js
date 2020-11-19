import React from "react";
import "./Header.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
// import { auth } from "./firebase";

function Header({ hideTexts = false }) {
  const [{ cart }] = useStateValue();

  // const [{ cart, user }] = useStateValue();
  // const login = () => {
  //   if (user) {
  //     auth.signOut();
  //   }
  // };

  return (
    <div className="navbar" id="myNavbar">
      <Link className="navbar-logo" to="/">
        <div className="navbar-logo1">
          <h2>Canwasp</h2>
        </div>
      </Link>

      {!hideTexts ? (
        <div className="navbar-texts">
          <AnchorLink href="#about">ABOUT</AnchorLink>
          <AnchorLink href="#canvas">FEATURED</AnchorLink>
          <AnchorLink href="#contact">CONTACT US</AnchorLink>
          <Link to="/BuyCanvas">
            <div>PRODUCT</div>
          </Link>
          {/* <Link to={!user && "/Login"}>
            <div className="navbar-textsEmail" onClick={login}>
              {user ? "SIGN OUT" : "SIGN IN"}
              <p className="email">{user?.email}</p>
            </div>
          </Link> */}
          <Link to="/Checkout">
            <div className="navbar-textsCart">
              CART <ShoppingCartIcon />: <span>{cart?.length}</span>
            </div>
          </Link>
        </div>
      ) : (
        <div className="navbar-CartRight">
          <AnchorLink className="navbar-TextHidden" href="#about">
            ABOUT
          </AnchorLink>
          <AnchorLink className="navbar-TextHidden" href="#product">
            PRODUCTS
          </AnchorLink>
          <AnchorLink className="navbar-TextHidden" href="#pricing">
            CONTACT US
          </AnchorLink>
          <Link to="/BuyCanvas">
            <div className="navbar-textsProducts navbar-TextHidden">
              PRODUCT
            </div>
          </Link>
          <Link to="/Checkout">
            <div className="navbar-textsCart">
              CART <ShoppingCartIcon />: <span>{cart?.length}</span>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
