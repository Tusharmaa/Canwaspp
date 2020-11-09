import React from "react";
import "./PaymentProduct.css";

function PaymentProduct({ image, name, priceIndia, priceNotIndia, id }) {
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
    <div className="paymentProduct">
      <div className="PaymentProduct-Image">
        <img src={image} alt="productImage" />
      </div>
      <div className="PaymentProduct-Title">
        <p>{name}</p>
      </div>
      <div className="PaymentProduct-Price">
        <p>₹{priceIndia}</p>
      </div>
    </div>
  );
}

export default PaymentProduct;
