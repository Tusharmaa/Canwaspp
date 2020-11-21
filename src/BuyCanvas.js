import React, { useEffect } from "react";
import "./BuyCanvas.css";
// import Header from "./Header";
import Product from "./Product";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";

function BuyCanvas() {
  let history = useHistory();

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="buyCanvas">
      <Navbar />
      <div className="buyCanvas-backButton">
        {/* <ArrowBackIosIcon
          onClick={() => history.goBack()}
          className="buyCanvas-button"
        /> */}
        <p> PRODUCTS</p>
      </div>
      <div className="buyCanvas-products">
        <div
          data-aos="zoom-out-up"
          data-aos-duration="2000"
          className="buyCanvas-productsDuo"
        >
          <Link to="/Product1">
            <Product
              id="5"
              image={"/images/canvas5can.jpg"}
              name="Never Give Up"
              priceIndia={1800}
              // priceNotIndia={112.99}
            />
          </Link>
          <Link to="/Product2">
            <Product
              id="5"
              image={"/images/Canvas2can.jpg"}
              name="MANNERS MAKETH MAN"
              priceIndia={700}
              // priceNotIndia={123.99}
            />
          </Link>
          <Link to="/Product3">
            <Product
              id="7"
              image={"/images/NYC.jpg"}
              name="AMAZING NEW YORK"
              priceIndia={650}
              // priceNotIndia={149.49}
            />
          </Link>
        </div>
      </div>
      <div className="buyCanvas-products">
        <div
          data-aos="zoom-out-up"
          data-aos-duration="2000"
          className="buyCanvas-productsDuo"
        >
          <Link to="/Product4">
            <Product
              id="8"
              image={"/images/Batman.jpg"}
              name="BATMAN"
              priceIndia={1800}
              // priceNotIndia={88.89}
            />
          </Link>
          <Link to="/Product5">
            <Product
              id="9"
              image={"/images/Ironman.jpg"}
              name="Ironman"
              priceIndia={2000}
              // priceNotIndia={46.99}
            />
          </Link>
          <Link to="/Product6">
            <Product
              id="6"
              image={"/images/Joker.jpg"}
              name="JOKER"
              priceIndia={1900}
              // priceNotIndia={49.49}
            />
          </Link>
        </div>
        {/* <div
          data-aos="zoom-out-up"
          data-aos-duration="2000"
          className="buyCanvas-productsDuo"
        >
          <Link to="/Product7">
            <Product
              id="10"
              image="https://images.pexels.com/photos/3705367/pexels-photo-3705367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              name="THE OLD TOWN"
              priceIndia={350}
              priceNotIndia={49.49}
            />
          </Link>
          <Link to="/Product8">
            <Product
              id="11"
              image="https://images.pexels.com/photos/1289669/pexels-photo-1289669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              name="SUNRISE"
              priceIndia={1000}
              priceNotIndia={79.99}
            />
          </Link>
          <Link to="/Product9">
            <Product
              id="12"
              image="https://images.pexels.com/photos/1353873/pexels-photo-1353873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              name="SUMMER FEELING"
              priceIndia={450}
              priceNotIndia={99.49}
            />
          </Link>
        </div> */}
      </div>
      {/* <div className="buyCanvas-products">
        <div
          data-aos="zoom-out-up"
          data-aos-duration="2000"
          className="buyCanvas-productsDuo"
        >
          <Link to="/Product10">
            <Product
              id="10"
              image="https://images.pexels.com/photos/3312887/pexels-photo-3312887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              name="ORCHIDS"
              priceIndia={1500}
              priceNotIndia={124.99}
            />
          </Link>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}

export default BuyCanvas;
