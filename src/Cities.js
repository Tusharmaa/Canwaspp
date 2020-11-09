import React from "react";
import "./Cities.css";
import Header from "./Header";
import Footer from "./Footer";
import Product from "./Product";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Cities() {
  let history = useHistory();
  return (
    <div className="cities">
      <Header hideTexts />
      <div className="cities-backButton">
        <ArrowBackIosIcon
          onClick={() => history.goBack()}
          className="back-button"
        />
        <p> CITIES</p>
      </div>
      <div className="citiesTrio">
        <Link to="/Product3">
          <Product
            id="3"
            image={"/images/NYC.jpg"}
            name="AMAZING NEW YORK"
            priceIndia={650}
            priceNotIndia={149.49}
          />
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Cities;
