import React, { useState, useEffect } from "react";
import "./CardOutline.css";
import { useStateValue } from "./StateProvider";
import PaymentProduct from "./PaymentProduct";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Currency from "./Currency";
import axios from "./axios";
import { useHistory } from "react-router-dom";
import { db } from "./firebase";

function CardOutlineIndia({
  name,
  surname,
  email,
  number,
  apt,
  street,
  city,
  state,
  pincode,
}) {
  const history = useHistory();
  const [{ cart, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);

  const getCartTotal = (a) =>
    a?.reduce((amount, item) => item.priceIndia + amount, 0);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getCartTotal(cart) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [cart]);

  console.log("client scret key is", clientSecret);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })

      .then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation
        db.collection("Users")
          .doc(user?.uid)
          .collection("Orders")
          .doc(paymentIntent.id)
          .set({
            cart: cart,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type: "EMPTY-CART",
        });
        history.replace("/Orders");
      });
    console.log(payload);
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="cardOutline">
      <div className="cardOutlineWrapper">
        <div className="cardOutlineWrapper-left">
          <p>DELIVERY ADDRESS:</p>
        </div>
        <div className="cardOutlineWrapper-right">
          <h3>
            {name} {surname}
          </h3>
          <h5>{email}</h5>
          <h5>
            {apt}, {street}
          </h5>
          <h5>
            {city},{state},{pincode}{" "}
          </h5>
          <h5>{number}</h5>
        </div>
      </div>

      <div className="cardOutline-Items">
        <div className="cardOutline-ItemsLeft">
          <p>YOUR PRODUCTS:</p>
        </div>
        <div className="cardOutline-ItemsRight">
          {cart.map((item) => (
            <PaymentProduct
              priceIndia={item.priceIndia}
              priceNotIndia={item.priceNotIndia}
              id={item.id}
              name={item.name}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="cardOutline-Card">
        <div className="cardOutline-CardLeft">
          <p>CARD:</p>
        </div>
        <div className="cardOutline-CardRight">
          <form>
            <CardElement onChange={handleChange} />
            <div className="cardOutline-CardRightPriceContainer">
              <Currency hideCurrency value={getCartTotal(cart)} />
              <button
                onClick={handleSubmit}
                disabled={processing || disabled || succeeded}
              >
                <span>{processing ? <p>Processing...</p> : "PAY"}</span>
              </button>
            </div>
            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default CardOutlineIndia;

// const getCartTotalIndia = (a) =>
//     a?.reduce((amount, item) => item.priceIndia + amount, 0);

//   const getCartTotalNotIndia = (a) =>
//     a?.reduce((amount, item) => item.priceIndia + amount, 0);

//   const response1 = () =>
//     axios({
//       method: "post",
//       // Stripe expects the total in a currencies subunits
//       url: `/payments/create?total=${getCartTotalIndia(cart)}`,
//     });

//   const response2 = () =>
//     axios({
//       method: "post",
//       // Stripe expects the total in a currencies subunits
//       url: `/payments/create?total=${getCartTotalNotIndia(cart)}`,
//     });

// e.preventDefault();
// setProcessing(true);
// const payload = await stripe
//   .confirmCardPayment(clientSecret, {
//     payment_method: {
//       card: elements.getElement(CardElement),
//     },
//   })
//   .then(({ paymentIntent }) => {
//     //paymentIntent = payment confirmation
//     db.collection("Users")
//       .doc(user?.uid)
//       .collection("Orders")
//       .doc(paymentIntent.id)
//       .set({
//         cart: cart,
//         amount: paymentIntent.amount,
//         created: paymentIntent.created,
//       });
//     setSucceeded(true);
//     setError(null);
//     setProcessing(false);
//     dispatch({
//       type: "EMPTY-CART",
//     });
//     history.replace("/Orders");
//   });
