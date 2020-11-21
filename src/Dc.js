import React from "react";
import "./Dc.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Product from "./Product";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Dc() {
  let history = useHistory();

  return (
    <div className="dc">
      <Navbar />
      <div className="dc-backButton">
        <ArrowBackIosIcon
          onClick={() => history.goBack()}
          className="back-button"
        />
        <p>DC</p>
      </div>

      <div className="dcTrio">
        <Link to="/Product4">
          <Product
            id="8"
            image={"/images/Batman.jpg"}
            name="BATMAN"
            priceIndia={1800}
            priceNotIndia={112.99}
          />
        </Link>
        <Link to="/Product6">
          <Product
            id="10"
            image={"/images/Joker.jpg"}
            name="JOKER"
            priceIndia={1900}
            priceNotIndia={112.99}
          />
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Dc;
