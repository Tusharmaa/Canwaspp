import React from "react";
import "./Motivational.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Product from "./Product";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Motivational() {
  let history = useHistory();
  return (
    <div className="motivational">
      <Navbar />
      <div className="motivational-backButton">
        <ArrowBackIosIcon
          onClick={() => history.goBack()}
          className="back-button"
        />
        <p>MOTIVATIONAL</p>
      </div>

      <div className="motivationalTrio">
        <Link to="/Product1">
          <Product
            id="1"
            image={"/images/canvas5can.jpg"}
            name="Never Give Up"
            priceIndia={1800}
            priceNotIndia={112.99}
          />
        </Link>
        <Link to="/Product2">
          <Product
            id="2"
            image={"/images/Canvas2can.jpg"}
            name="MANNERS MAKETH MAN"
            priceIndia={700}
            priceNotIndia={123.99}
          />
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Motivational;
