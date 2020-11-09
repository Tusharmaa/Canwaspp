import React, { useState } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";
import { db } from "./firebase";

function Payment() {
  const [{ cart }, dispatch] = useStateValue();

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [apt, setApt] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  // let Token = "722043f5c7eccf";
  // const [country, setCountry] = useState("");

  // useEffect(() => {
  //   fetch(`https://ipinfo.io?token=${Token}`)
  //     .then((res) => res.json())
  //     .then((response) => {
  //       console.log("Country is : ", response);
  //       setCountry(response.country);
  //     })
  //     .catch((e) => {
  //       console.log("Request failed:", e);
  //     });
  // }, []);

  const getCartTotal = (a) =>
    a?.reduce((amount, item) => item.priceIndia + amount, 0);

  let history = useHistory();

  const addToDatabase = (e) => {
    e.preventDefault();
    db.collection("UserPayment").add({
      fname: fName,
      lname: lName,
      email: email,
      number: number,
      apt: apt,
      street: street,
      city: city,
      state: state,
      pincode: pincode,
    });
    dispatch({
      type: "PAYMENT-DETAILS",
      details: {
        fName: fName,
        lName: lName,
        email: email,
        number: number,
        apt: apt,
        street: street,
        city: city,
        state: state,
        pincode: pincode,
      },
    });

    history.push("/Card");
  };

  console.log();
  return (
    <div className="payment">
      <p>
        You have <strong> {cart?.length} </strong> items in your cart for which
        the total amout comes to:{" "}
        <strong>
          <p>₹</p>
          {getCartTotal(cart)}
        </strong>
      </p>
      <div className="payment-detailsTag">
        <p>Required fields*</p>
      </div>
      <div className="payment-wrapper">
        <div className="payment-wrapperName">
          <div className="payment-wrapperNameFirst">
            <h5>First Name*</h5>
            <input
              required
              type="text"
              placeholder="Enter your First Name"
              value={fName}
              onChange={(e) => setFName(e.target.value)}
            />
          </div>
          <div className="payment-wrapperNameLast">
            <h5>Last Name*</h5>
            <input
              required
              type="text"
              placeholder="Enter your Last Name"
              value={lName}
              onChange={(e) => setLName(e.target.value)}
            />
          </div>
        </div>
        <div className="payment-wrapperCredentials">
          <div className="payment-wrapperCredentialsEmail">
            <h5>Email*</h5>
            <input
              required
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="payment-wrapperCredentialsPhone">
            <h5>Phone Number*</h5>
            <input
              required
              type="text"
              placeholder="Enter your Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="payment-wrapperAddress">
          <div className="payment-wrapperAddressLine1">
            <h5>Apt, suite, etc.*</h5>
            <input
              type="text"
              placeholder="Appartment Number"
              required
              value={apt}
              onChange={(e) => setApt(e.target.value)}
            />
          </div>
          <div className="payment-wrapperAddressLine2">
            <h5>Street address*</h5>
            <input
              type="text"
              placeholder="Street Address"
              required
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
        </div>
        <div className="payment-wrapperPlace">
          <div className="payment-wrapperPlaceCity">
            <h5>City*</h5>
            <input
              type="text"
              placeholder="City"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="payment-wrapperPlaceState">
            <h5>State*</h5>
            <input
              type="text"
              placeholder="State"
              required
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="payment-wrapperPlacePincode">
            <h5>Pincode*</h5>
            <input
              type="text"
              placeholder="Pincode"
              required
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
          </div>
        </div>
      </div>
      <button onClick={addToDatabase} type="submit">
        CONTINUE
      </button>
    </div>
  );
}

export default Payment;
