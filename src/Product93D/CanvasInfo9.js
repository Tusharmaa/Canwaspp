import React, { useState } from "react";
import "./CanvasInfoFeatured.css";
import { useStateValue } from "../StateProvider";
import Header from "../Header";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import CarouselFeature from "../CarouselFeature";
// import ThreeDModel from "./ThreeDModel";
import ThreeDProducts from "./ThreeDProducts9";
// import Ar from "./Ar";

function CanvasInfo({ id, image, name, priceIndia, priceNotIndia }) {
  const [{}, dispatch] = useStateValue();
  const [count, setCount] = useState(0);
  const [hideC, setHideC] = useState(false);
  const [hideT, setHideT] = useState(true);

  const addToCart = () => {
    for (let i = 0; i < count; i++) {
      dispatch({
        type: "ADD-TO-CART",
        item: {
          id: id,
          image: image,
          name: name,
          priceIndia: priceIndia,
          priceNotIndia: priceNotIndia,
        },
      });
      setCount(0);
    }
  };

  const increment = () => {
    setCount(count + 1);
    for (let i = 0; i <= count; i++) {}
  };

  const decrement = () => {
    count > 0 ? setCount(count - 1) : setCount(0);
  };

  let history = useHistory();

  const hideCarousel = () => {
    setHideC(false);
    setHideT(true);
  };

  function hide3DModel() {
    setHideT(false);
    setHideC(true);
  }

  // let Token = "722043f5c7eccf";

  // const [country, setCountry] = useState("");

  // useEffect(() => {
  //   fetch(`https://ipinfo.io?token=${Token}`)
  //     // fetch("https://extreme-ip-lookup.com/json/")
  //     .then((res) => res.json())
  //     .then((response) => {
  //       console.log("Country is : ", response);
  //       setCountry(response.country);
  //     })
  //     .catch((e) => {
  //       console.log("Request failed:", e);
  //     });
  // }, []);

  return (
    <div className="canvasInfo">
      <Header hideTexts />
      <div className="canvasInfo-backButton">
        <ArrowBackIosIcon
          onClick={() => history.goBack()}
          className="canvasInfo-button"
        />
      </div>
      <div className="canvasInfo-wrapper">
        <div className="canvasInfo-left">
          {hideC ? (
            <CarouselFeature image={image} />
          ) : (
            <CarouselFeature hide image={image} />
          )}

          {hideT ? (
            <ThreeDProducts imageUrl={image} />
          ) : (
            <ThreeDProducts hide />
          )}

          {/* <button>
            VIEW IN AR MODE
            <Ar />
            <p>
              <small>This feature will be available soon</small>
            </p>
          </button> */}
          <button onClick={hideCarousel}>VIEW THE 3D MODEL</button>
          <button onClick={hide3DModel}>VIEW IMAGES</button>
        </div>
        <div className="canvasInfo-right">
          <div className="canvasInfo-rightUpper">
            <h2>{name}</h2>
            <h5>CANVASP</h5>
            {/* 
            {country === "" ? (
              ""
            ) : country === "IN" ? (
              <p>₹{priceIndia}</p>
            ) : (
              <p>${priceNotIndia}</p>
            )} */}
            <br />
            <p>Select the quantity</p>
            <div className="canvasInfo-rightUpperQuantity">
              <button onClick={decrement}>
                <strong>-</strong>
              </button>
              <div>
                <strong>{count}</strong>
              </div>{" "}
              <button onClick={increment}>
                <strong>+</strong>
              </button>
            </div>
            <div className="canvasInfo-rightUpperButtons">
              <div className="cartButton">
                <button onClick={addToCart}>ADD TO CART</button>
              </div>
              <Link to="/Checkout">
                <button className="checkoutButton">PROCEED TO CHECKOUT</button>
              </Link>
            </div>
          </div>
          <br />
          <div className="canvasInfo-rightLower">
            <h2>PRODUCT DESCRIPTION</h2>
            <h3>MATERIAL AND CARE</h3>
            <ul>
              <li>High quality polu-carbon blend canvas</li>
              <li>Hand, high density wood fiberboard and a plastic frame</li>
              <li>UV coating is scratch resistant</li>
              <li>Wipe clean with a damp cloth</li>
            </ul>
            <h3>FRAME THICKNESS</h3>
            <ul>
              <li>1.25 inch</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CanvasInfo;
