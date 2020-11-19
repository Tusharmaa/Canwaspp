import React from "react";
import { useStateValue } from "./StateProvider";
import "./Currency.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";

function Currency({ value, hideCurrency }) {
  const [{ cart }] = useStateValue();
  const history = useHistory();
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
    <div className="currencyWrapper">
      {!hideCurrency ? (
        <div className="currency">
          <ArrowBackIosIcon
            onClick={() => history.goBack()}
            className="currency-backbutton"
          />
          <div className="currency-value">
            <p>
              Subtotal ({cart?.length} items):{" "}
              <strong>
                <small>₹</small>
                {value}
              </strong>
            </p>
          </div>
          <button onClick={(e) => history.push("/Payment")}>
            PROCEED FOR PAYMENT
          </button>
          <hr />{" "}
        </div>
      ) : (
        <div className="currencyNew">
          <div className="currency-valueNew">
            <p>
              Subtotal: <small>₹</small> {value}
            </p>
          </div>
          <button
            className="hideButtonArrow"
            onClick={(e) => history.push("/Payment")}
          >
            PROCEED FOR PAYMENT
          </button>
        </div>
      )}
    </div>
  );
}

export default Currency;
