import React from "react";
import "./Marvel.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Product from "./Product";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Marvel() {
  let history = useHistory();

  return (
    <div className="marvel">
      <Navbar />
      <div className="marvel-backButton">
        <ArrowBackIosIcon
          onClick={() => history.goBack()}
          className="back-button"
        />
        <p>MARVEL</p>
      </div>
      <div className="marvelTrio">
        <Link to="/Product5">
          <Product
            id="9"
            image={"/images/Ironman.jpg"}
            name="IRONMAN"
            priceIndia={2000}
            priceNotIndia={112.99}
          />
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Marvel;
