import React from "react";
import "./PaymentWrapper.css";
import Payment from "./Payment";
import { useStateValue } from "./StateProvider";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";

function PaymentWrapper() {
  const [{ cart }] = useStateValue();

  const history = useHistory();

  return (
    <div className="paymentWrapper">
      <div className="paymentWrapper-top">
        <div className="paymentWrapper-button">
          <ArrowBackIosIcon
            onClick={() => history.goBack()}
            className="paymentWrapper-backbutton"
          />
        </div>
        <p>PAYMENT STEP 1 of 2</p>
      </div>
      <hr />
      {cart?.length === 0 ? (
        <h3 style={{ textAlign: "center", paddingTop: "50px" }}>
          Please add items in your cart to proceed for payment
        </h3>
      ) : (
        <Payment />
      )}
    </div>
  );
}

export default PaymentWrapper;
