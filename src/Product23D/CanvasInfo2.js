import React, { useState, useEffect } from "react";
import "../CanvasInfoFeatured.css";
import { useStateValue } from "../StateProvider";
import Navbar from "../Navbar";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import CarouselFeature from "../CarouselFeature";
import ThreeDProducts from "./ThreeDProducts2";
import { db } from "../firebase";
import firebase from "firebase";
import Review from "../Review";
import AOS from "aos";
import "aos/dist/aos.css";

function CanvasInfo({ id, image, name, priceIndia, priceNotIndia }) {
  const [{}, dispatch] = useStateValue();
  const [count, setCount] = useState(0);
  const [hideC, setHideC] = useState(false);
  const [hideT, setHideT] = useState(true);
  const [userName, setUserName] = useState("");
  const [review, setReview] = useState("");
  const [userReview, setUserReview] = useState([]);
  const [rate, setRate] = useState("");

  const one = (e) => {
    setRate("1");
    document.querySelector(".one").style.backgroundColor = "gray";
    document.querySelector(".two").style.backgroundColor = "black";
    document.querySelector(".three").style.backgroundColor = "black";
    document.querySelector(".four").style.backgroundColor = "black";
    document.querySelector(".five").style.backgroundColor = "black";
  };
  const two = (e) => {
    setRate("2");
    document.querySelector(".one").style.backgroundColor = "black";
    document.querySelector(".two").style.backgroundColor = "gray";
    document.querySelector(".three").style.backgroundColor = "black";
    document.querySelector(".four").style.backgroundColor = "black";
    document.querySelector(".five").style.backgroundColor = "black";
  };
  const three = () => {
    setRate("3");
    document.querySelector(".one").style.backgroundColor = "black";
    document.querySelector(".two").style.backgroundColor = "black";
    document.querySelector(".three").style.backgroundColor = "gray";
    document.querySelector(".four").style.backgroundColor = "black";
    document.querySelector(".five").style.backgroundColor = "black";
  };
  const four = (e) => {
    setRate("4");
    document.querySelector(".one").style.backgroundColor = "black";
    document.querySelector(".two").style.backgroundColor = "black";
    document.querySelector(".three").style.backgroundColor = "black";
    document.querySelector(".four").style.backgroundColor = "gray";
    document.querySelector(".five").style.backgroundColor = "black";
  };
  const five = (e) => {
    setRate("5");
    document.querySelector(".one").style.backgroundColor = "black";
    document.querySelector(".two").style.backgroundColor = "black";
    document.querySelector(".three").style.backgroundColor = "black";
    document.querySelector(".four").style.backgroundColor = "black";
    document.querySelector(".five").style.backgroundColor = "gray";
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const sendToDatabase = (e) => {
    e.preventDefault();
    if (userName === "" || review === "") {
      alert("Enter your name and review to post your review.");
    } else {
      db.collection("Reviews2").add({
        userName: userName,
        review: review,
        rate: rate,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setUserName("");
      setReview("");
      setRate("");
    }
  };

  useEffect(() => {
    db.collection("Reviews2")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setUserReview(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

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
      <Navbar />
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
            <h5>CANWASP</h5>

            <p>₹{priceIndia}</p>

            <br />
            <p>Select the quantity</p>
            <div className="canvasInfo-rightUpperQuantity">
              <button onClick={decrement}>
                <strong>-</strong>
              </button>
              <div>
                <strong>{count}</strong>
              </div>
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
              <li>High quality poly-carbon blend canvas</li>
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
      <div className="canvasInfo-Bottom">
        <h1>WRITE REVIEW</h1>
        <div className="canvasInfo-BottomInput">
          <p>NAME</p>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
          />
          <p>REVIEW</p>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            type="text"
          />
          <div value={rate} className="LikeDislike">
            <p>RATE</p>
            <div onClick={one} value={rate} className="one">
              <p>1</p>
            </div>
            <div onClick={two} value={rate} className="two">
              <p>2</p>
            </div>
            <div onClick={three} value={rate} className="three">
              <p>3</p>
            </div>
            <div onClick={four} value={rate} className="four">
              <p>4</p>
            </div>
            <div onClick={five} value={rate} className="five">
              <p>5</p>
            </div>
          </div>
          <button onClick={sendToDatabase}>SUBMIT</button>
        </div>
      </div>
      <hr />

      <div
        data-aos="fade-out"
        data-aos-duration="3000"
        className="canvasInfo-Review"
      >
        {userReview.map((ur) => (
          <Review
            name={ur.userName}
            review={ur.review}
            rate={ur.rate}
            time={new Date(ur.timestamp.seconds * 1000).toLocaleDateString(
              "en-US"
            )}
          />
        ))}
      </div>
    </div>
  );
}

export default CanvasInfo;
